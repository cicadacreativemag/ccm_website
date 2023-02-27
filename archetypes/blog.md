---
title: "{{ replace .Name "-" " " | title }}"
draft: false
date: {{ .Date.Format "January 2, 2006" }}
authors: ["{{ .Site.Params.Author }}"]
layout: blog
featuredImage: "/images/blog/ "
summary:
---