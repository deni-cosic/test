resource "google_cloud_run_service" "service" {
  name     = var.service_name
  location = var.location
  project  = var.project

  template {
    spec {
      container_concurrency = 80
      service_account_name  = "479576421896-compute@developer.gserviceaccount.com"
      serving_state         = null
      timeout_seconds       = 300

      containers {
        image = var.image

        dynamic "env" {
          for_each = var.env_vars
          content {
            name  = env.key
            value = env.value
          }
        }


        dynamic "env" {
          for_each = var.secrets
          content {
            name = env.key
            value_from {
              secret_key_ref {
                name = env.value.secret_name
                key  = env.value.version
              }
            }
          }
        }

        ports {
          container_port = 1337
          name           = "http1"
          protocol       = null
        }
        resources {
          limits = {
            "cpu"    = "1000m"
            "memory" = "512Mi"
          }
          requests = {}
        }


        startup_probe {
          failure_threshold     = 1
          initial_delay_seconds = 0
          period_seconds        = 240
          timeout_seconds       = 240

          tcp_socket {
            port = 1337
          }
        }

      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale"     = var.scaling.minInstances
        "autoscaling.knative.dev/maxScale"     = var.scaling.maxInstances
        "run.googleapis.com/client-name"       = "gcloud"
        "run.googleapis.com/client-version"    = "483.0.0"
        "run.googleapis.com/startup-cpu-boost" = "true"
      }
    }

  }



  traffic {
    latest_revision = true
    percent         = 100
  }

}

resource "google_cloud_run_service_iam_member" "all_users_invoker" {
  project  = var.project
  location = google_cloud_run_service.service.location
  service  = google_cloud_run_service.service.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}