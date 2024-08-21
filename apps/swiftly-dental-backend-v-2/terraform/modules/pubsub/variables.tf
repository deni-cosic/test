variable "main_topic_name" {
  description = "The name of the main Pub/Sub topic"
  type        = string
}

variable "dead_letter_topic_name" {
  description = "The name of the dead letter Pub/Sub topic"
  type        = string
}

variable "main_subscription_name" {
  description = "The name of the main Pub/Sub subscription"
  type        = string
}

variable "dead_letter_subscription_name" {
  description = "The name of the dead letter Pub/Sub subscription"
  type        = string
}

variable "max_delivery_attempts" {
  description = "The maximum number of delivery attempts for the main subscription"
  type        = number
  default     = 5
}

variable "ack_deadline_seconds" {
  description = "The acknowledgment deadline for the subscriptions"
  type        = number
  default     = 20
}