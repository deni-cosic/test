terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.38.0"
    }
  }

  backend "gcs" {
    bucket = "qrypta-terraform-state-bucket"
  }
}

provider "google" {
  project = var.project
  region  = var.region
}


module "backend_staging" {
  source       = "./modules/cloud_run_service"
  project      = var.project
  location     = var.location
  service_name = "qrypta-dental-backend--staging"
  image        = "europe-west1-docker.pkg.dev/qrypta-reborn/qrypta-dental-backend-v2-image-repository/qrypta-dental-backend-v2--staging"
  env_vars = {
    BCRYPT_SALT                 = "10"
    CLIENT_URL                  = "app.swiftly.com"
    EMAIL_SENDER                = "info@swiftly.agency"
    FORGOT_PASSWORD_TEMPLATE_ID = "5954411"
    JWT_EXPIRATION              = "2d"
    NODE_ENV                    = "staging"
  }
  secrets = {
    ADMIN_TOKEN = {
      secret_name = "ADMIN_TOKEN"
      version     = "latest"
    }
    DB_URL = {
      secret_name = "DB_URL_V2--STAGING"
      version     = "latest"
    }
    JWT_SECRET_KEY = {
      secret_name = "JWT_SECRET_KEY"
      version     = "latest"
    }
    MAILJET_API_KEY_PRIVATE = {
      secret_name = "MAILJET_API_KEY_PRIVATE"
      version     = "latest"
    }
    MAILJET_API_KEY_PUBLIC = {
      secret_name = "MAILJET_API_KEY_PUBLIC"
      version     = "latest"
    }
  }
}

module "backend_prod" {
  source       = "./modules/cloud_run_service"
  project      = var.project
  location     = var.location
  service_name = "qrypta-dental-backend"
  image        = "europe-west1-docker.pkg.dev/qrypta-reborn/qrypta-dental-backend-v2-image-repository/qrypta-dental-backend-v2"

  scaling = {
    minInstances = 1
    maxInstances = 3
  }

  env_vars = {
    BCRYPT_SALT                 = "10"
    CLIENT_URL                  = "app.swiftly.agency"
    EMAIL_SENDER                = "info@swiftly.agency"
    FORGOT_PASSWORD_TEMPLATE_ID = "5954411"
    JWT_EXPIRATION              = "2d"
    GRAPHQL_INTROSPECTION       = "true"
    NODE_ENV                    = "production"
  }
  secrets = {
    ADMIN_TOKEN = {
      secret_name = "ADMIN_TOKEN"
      version     = "latest"
    }
    DATABASE_PASSWORD = {
      secret_name = "DATABASE_PASSWORD"
      version     = "latest"
    }
    DB_URL = {
      secret_name = "DB_URL_V2"
      version     = "latest"
    }
    JWT_SECRET_KEY = {
      secret_name = "JWT_SECRET_KEY"
      version     = "latest"
    }
    MAILJET_API_KEY_PRIVATE = {
      secret_name = "MAILJET_API_KEY_PRIVATE"
      version     = "latest"
    }
    MAILJET_API_KEY_PUBLIC = {
      secret_name = "MAILJET_API_KEY_PUBLIC"
      version     = "latest"
    }
    SWIFTLY_AWS_SECRET_ACCESS_KEY = {
      secret_name = "SWIFTLY_AWS_SECRET_ACCESS_KEY"
      version     = "latest"
    }
  }
}

module "cloud_sql_instance" {
  source           = "./modules/cloud_sql"
  project          = var.project
  region           = var.region
  instance_name    = "swiftly"
  database_version = "POSTGRES_15"
  tier             = "db-custom-1-3840"
}

module "cloud_storage_bucket" {
  source        = "./modules/cloud_storage"
  project       = var.project
  bucket_name   = "form-link-pdf-base-dev"
  location      = var.region
  storage_class = "STANDARD"
}

module "message_pubsub_dev" {
  source                        = "./modules/pubsub"
  main_topic_name               = "message-main-topic--dev"
  dead_letter_topic_name        = "message-dead-letter-topic--dev"
  main_subscription_name        = "message-main-subscription--dev"
  dead_letter_subscription_name = "message-dead-letter-subscription--dev"
  max_delivery_attempts         = 5
  ack_deadline_seconds          = 20
}


