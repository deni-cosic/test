variable "project" {
  description = "The project ID to deploy to"
  type        = string
}


variable "region" {
  description = "The region to deploy to"
  type        = string
}

variable "instance_name" {
  description = "The name of the Cloud SQL instance"
  type        = string
}

variable "database_version" {
  description = "The database version (e.g., MYSQL_5_7, POSTGRES_12)"
  type        = string
}

variable "tier" {
  description = "Instance tier https://cloud.google.com/sql/docs/mysql/instance-settings"
  type        = string
}
