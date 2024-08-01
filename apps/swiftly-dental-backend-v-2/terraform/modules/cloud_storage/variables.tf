# modules/cloud_storage/variables.tf
variable "project" {
  description = "The project ID to deploy to"
  type        = string
}

variable "bucket_name" {
  description = "The name of the Cloud Storage bucket"
  type        = string
}

variable "location" {
  description = "The location of the Cloud Storage bucket"
  type        = string
}

variable "storage_class" {
  description = "The storage class of the bucket (e.g., STANDARD, NEARLINE, COLDLINE, ARCHIVE)"
  type        = string
  default     = "STANDARD"
}