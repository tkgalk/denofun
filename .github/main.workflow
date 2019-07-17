workflow "run tests" {
  on = "pull_request"
  resolves = ["run test docker"]
}

action "run test docker" {
  uses = "actions/docker/cli@86ff551d26008267bb89ac11198ba7f1d807b699"
}
