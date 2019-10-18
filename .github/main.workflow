workflow "test" {
  on = "push"
  resolves = ["run test"]
}

action "run test" {
  uses = "denolib/deno-action@0.20.0"
  args = "run ./_test/test.ts"
}
