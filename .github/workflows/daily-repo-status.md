---
description: |
  This workflow creates daily repo status reports. It gathers recent repository
  activity (issues, PRs, discussions, releases, code changes) and generates
  engaging GitHub issues with productivity insights, community highlights,
  and project recommendations.

on:
  schedule: daily
  workflow_dispatch:

permissions:
  contents: read
  issues: read
  pull-requests: read

network: defaults

tools:
  github:
    # If in a public repo, setting `lockdown: false` allows
    # reading issues, pull requests and comments from 3rd-parties
    # If in a private repo this has no particular effect.
    lockdown: false

safe-outputs:
  create-issue:
    title-prefix: "[repo-status] "
    labels: [report, daily-status]
  create-pull-request:
    title-prefix: "[repo-maintenance] "
    labels: [automation, ai]
    draft: true
    base-branch: "main"
    if-no-changes: "ignore"
    fallback-as-issue: false
source: githubnext/agentics/workflows/daily-repo-status.md@b5a984dc86cca89e05c23f9f157117642aed6f22
engine: claude
---

# Daily Repo Status

Create an upbeat daily status report for the repo as a GitHub issue.
Analyze this repository and suggest improvements.
Create pull requests if needed.

## PRを作るときのルール
- READMEやドキュメント、軽微な改善など「変更が必要」なら、ブランチを切ってコミットし、PRを作成する
- PR本文に「変更点 / 理由 / 影響範囲 / 簡単な確認方法」を短く書く
- 変更が無いならPRは作らない（issueのレポートだけ出す）

## What to include

- Recent repository activity (issues, PRs, discussions, releases, code changes)
- Progress tracking, goal reminders and highlights
- Project status and recommendations
- Actionable next steps for maintainers
- Update README based on code changes.

## Style
- Write in Japanese as much as possible.
- Be positive, encouraging, and helpful 🌟
- Use emojis moderately for engagement
- Keep it concise - adjust length based on actual activity

## Process

1. Gather recent activity from the repository
2. Study the repository, its issues and its pull requests
3. Create a new GitHub issue with your findings and insights