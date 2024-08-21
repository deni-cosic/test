data "google_project" "project" {
}


resource "google_pubsub_topic" "dead_letter_topic" {
  name = var.dead_letter_topic_name
}
resource "google_pubsub_subscription" "dead_letter_subscription" {
  name  = var.dead_letter_subscription_name
  topic = google_pubsub_topic.dead_letter_topic.id

  ack_deadline_seconds = var.ack_deadline_seconds

  push_config {
    push_endpoint = "https://6fc4-212-15-177-20.ngrok-free.app/api/messages/send-message-dlq"

    attributes = {
      x-goog-version = "v1"
    }
    no_wrapper {
      write_metadata = true
    }

  }

}

resource "google_pubsub_topic" "main_topic" {
  name = var.main_topic_name
}

resource "google_pubsub_subscription" "main_subscription" {
  name  = var.main_subscription_name
  topic = google_pubsub_topic.main_topic.id

  dead_letter_policy {
    dead_letter_topic     = google_pubsub_topic.dead_letter_topic.id
    max_delivery_attempts = var.max_delivery_attempts
  }

  ack_deadline_seconds = var.ack_deadline_seconds

  push_config {
    push_endpoint = "https://6fc4-212-15-177-20.ngrok-free.app/api/messages/send-message"

    attributes = {
      x-goog-version = "v1"
    }
    no_wrapper {
      write_metadata = true
    }

  }


}


resource "google_pubsub_subscription_iam_binding" "main_subscription_subscriber" {
  subscription = var.main_subscription_name
  role         = "roles/pubsub.subscriber"
  members = [
    "serviceAccount:service-${data.google_project.project.number}@gcp-sa-pubsub.iam.gserviceaccount.com"
  ]
}

resource "google_pubsub_topic_iam_binding" "dead_letter_topic_publisher" {
  topic = var.dead_letter_topic_name
  role  = "roles/pubsub.publisher"
  members = [
    "serviceAccount:service-${data.google_project.project.number}@gcp-sa-pubsub.iam.gserviceaccount.com"
  ]
}