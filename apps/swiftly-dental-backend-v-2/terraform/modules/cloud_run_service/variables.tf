variable "project" {
  type = string
}

variable "location" {
  type = string
}

variable "service_name" {
  type = string
}

variable "image" {
  type = string
}

variable "env_vars" {
  type    = map(string)
  default = {}
}

variable "secrets" {
  type = map(object({
    secret_name = string
    version     = string
  }))
  default = {}
}


variable "scaling" {
  type = object({
    minInstances = number
    maxInstances = number
  })
  default = {
    minInstances : 0
    maxInstances : 1
  }

}
