#!/bin/bash

set -e

deno --importmap=import_map.json test/_test.ts
