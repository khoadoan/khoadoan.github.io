---
layout: page
permalink: /publications/
title: publications
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2017, 2016, 2015, 2014, 2013]
nav: true
weight: 20
---
<div style="font-style: normal">
<div class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Majority of work done or significant contribution by MAIL/SAIL members!">
    <abbr class="badge bg-danger"><i class="bi bi-check2"></i></abbr> Majority of work done or significant contribution by MAIL/SAIL members!
</div>

<div>
<a class="btn btn-sm" role="button" style="color: var(--global-text-color); border: 1px solid var(--global-text-color); font-style: normal; padding: 0.0rem 0.0rem 0.0rem 0.0rem;">Submission History</a> shows the venues where the work has been submitted (🙃 including <strong>rejections</strong> 🙃). I hope some of my poor rejection/failure histories (record now is 10 rejections 😅) give you some encouragement to try again when things don't work out (don't give up -- good work doesn't need to be rushed)!
</div>

<div class="text-alert" style="padding-top:1rem">
publications by categories in reversed chronological order. An up-to-date list is available on <em><a href="https://scholar.google.com/citations?user=Zz2hMgcAAAAJ&hl=en" style="color: var(--global-theme-color); font-size:15px">Google Scholar</a></em>.
</div>

<hr />

<div class="publications">
  {% for y in page.years %}
    <!-- <h2 class="pyear">{{y}}&nbsp;&nbsp;</h2> -->
    <!-- <p>&nbsp;</p> -->
    {% bibliography -f papers -q @*[year={{y}}]* %}
  {% endfor %}
</div>

</div>

<!-- <a href="https://scholar.google.com/citations?user=Zz2hMgcAAAAJ&hl=en">Google Scholar</a>. -->
