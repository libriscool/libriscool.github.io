import{_ as o,b as t,h as e,d as n,a as r}from"./index-a9f90031.js";const s={},a={style:{"white-space":"pre-wrap"}},i=n("h1",null,"Published books",-1);function l(c,h){return r(),t("pre",a,[e(""),i,e(`
Detailed information about published books and book list management.

The page can be accessed by users with publisher role or by administrators.

If current user have registered more that one publishing house or he is a portal administrator, he can see book list from all publishing houses or choose one.

Book information:
- state (available, suspended,...)
- publishing house
- title
- authors
- annotation
- table of contents
- cover image
- set of topics (children's, art, technical...)
- introductory fragment
- keywords
- volume
- size and weight
- year the book was written
- date of publication
- date of initial upload
- date of last correction
- list of uploaded corrections (with details about each correction)
- total number of print orders
- date of last print order
- list of print orders (list of order ids)
- number of shops that currently offer the book
- list of shop that currently offer the book (with details about each offer: when starts, how many sales...)
- publisher fee for printing the book (fixed or percentage of sale)
- totall fees received from the book sales (printhouse fee, delivery fee, publisher fee, liblis.cool fee)
- book specific information (JSON with optional properties for printhouse)

Book management:
- upload a new book
- for each uploaded book:
  - download
  - edit properties (title, authors, topics...)
  - upload correction
  - suspend
  - remove
`)])}const f=o(s,[["render",l]]);export{f as default};
