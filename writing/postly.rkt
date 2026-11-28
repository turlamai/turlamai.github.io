#lang racket/base
(provide config)
(define config
  (hasheq 'title "TurLamAI · Articles"
          'base-url "https://jrtx.site/articles"
          'nav '(("TurLamAI" . "https://jrtx.site/")
                 ("Articles" . "/")
                 ("RSS" . "/feed.xml"))))
