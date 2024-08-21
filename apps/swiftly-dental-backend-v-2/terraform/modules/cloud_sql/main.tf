
resource "google_sql_database_instance" "instance" {
  name             = var.instance_name
  project          = var.project
  region           = var.region
  database_version = var.database_version

  settings {
    deletion_protection_enabled = true
    tier                        = var.tier

    maintenance_window {
      day          = 5
      hour         = 22
      update_track = "stable"
    }
  }

}

resource "google_sql_user" "postgres" {
  name     = "postgres"
  instance = google_sql_database_instance.instance.name
  project  = var.project
}