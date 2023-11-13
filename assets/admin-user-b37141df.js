import{_ as n,b as t,h as e,d as s,a as o}from"./index-a9f90031.js";const a={},i={style:{"white-space":"pre-wrap"}},r=s("h1",null,"Portal users",-1),l=s("b",null,"Portal user",-1),c=s("i",null,"publisher",-1),h=s("i",null,"printman",-1),p=s("i",null,"shopman",-1);function u(d,m){return o(),t("pre",i,[e(""),r,e(`
List of all portal users with detailed information and user management.

`),l,e(" is a user authenticated on the libris.cool portal who has access to the portal resources, depending on the roles assigned to them. A user with the "),c,e(" role has access to information about the publishung house. Role "),h,e(" gives access to the printing house pages, "),p,e(` - to the shop pages. Administrators will have access to all pages without restrictions.

The page can be accessed only by administrators.

Portal user properties: 
- state (active, locked),
- real name (first name, last name),
- username,
- password,
- email,
- roles (combination of publisher, printman, shopman, admin), 
- creation timestamp, 
- last activity timestamp,
- owned publishing houses (count and list),
- owned printing houses (count and list),
- owned shops (count and list)

User management:
- register a new user, 
- edit the user properties (state, password, roles, email,...),
- connect/disconnect resources (publishing house, printing house, shop)
- remove user
`)])}const g=n(a,[["render",u]]);export{g as default};
