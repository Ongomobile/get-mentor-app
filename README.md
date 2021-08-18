# Inspiration For Namjai

Namjai is a Thai term น้ำ ใจ (water + heart) means “water from the heart” and is used to describe genuine acts of kindness. It implies that these acts of kindness are done without any expectations — with no strings attached.

![Project Image](https://res.cloudinary.com/dnpje4e34/image/upload/v1629309755/why_i_love__thai_x9gzlp.jpg)






## How I worked on this project

A Designer mentor and friend of mine Bruno Saez, challenged me to build a full stack app from the design and user flows. 
When I started I only had my fundamental skills, so I had to research and piece together some tutorials.

- I built this app based on Figma designs: [Figma designs](https://www.figma.com/file/qzcUoZmBozoGoREqxgHa3y/Namjai-Master?node-id=5%3A496)
- For the front end I choose to use Create React App to get up and running quickly.
- For styling I choose to use styled components.
- For data storage and authentication I choose to use Firebase.




## How to navigate this project
- You can see how I used [Firebase](https://github.com/Ongomobile/get-mentor-app/tree/master/src/components/Firebase) with context and a high order componets.
- Responsive CSS using styled-components:[UI Components](https://github.com/Ongomobile/get-mentor-app/tree/master/src/components/UI_Components)
- Routing with React Router Dom [Navigation](https://github.com/Ongomobile/get-mentor-app/blob/master/src/components/Navbar/index.js)




## Some challenges I had to overcome

One of the biggest challenges I had was to overcome was user bieng able to create tags.
Once again I had to figure this out. I found a Codepen that used Class components and a CSS stylesheet.
But I need to use styled components and functional componets using hooks. 

I managed to refactor the code I found and decided to share it on medium. Hoping that it would help others.
[Tags UI Component Article](https://ongomobile.medium.com/create-a-tags-ui-component-in-react-and-styled-components-9b326c65e094) and [Repository Code](https://github.com/Ongomobile/get-mentor-app/blob/master/src/components/UI_Components/TagsUi/index.js)






## If I had more time I would change this

- Add unit and integration testing
- Not be so dependant on Firebase
- Refactor to be more usable
