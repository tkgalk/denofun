workflow "test" {
    on = "push"
    resolves = ["run test"]
}

workflow "lint" {
    on = "pull_request_review"
    resolves = ["prettier"]
}

action "prettier" {
    uses = "bltavares/actions/prettier@master"
    args = ["autofix"]
    secrets = ["GITHUB_TOKEN"]
}

action "run test" {
    uses = "denolib/deno-action@0.20.0"
    args = "run ./test/_test.ts"
}
