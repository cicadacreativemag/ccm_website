---
title: "{{ replace .Name "-" " " | title }}"
draft: false
date: {{ .Date }}
authors: ["{{ .Site.Params.Author }}"]
layout: blog
featuredImage: "/images/blog/ "
summary:
---