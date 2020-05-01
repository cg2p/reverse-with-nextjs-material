# reverse-with-nextjs-material
Basic web app with form that takes a string and displays back its reverse.

## Goals of this code
1. Base Project - clone the starter project of a basic NextJS web app with the Material UI theme.
2. Material Update - enhance the app with example Material theme
3. Web App - re-factor the app into components and pages
4. Reverse Function - modify the app to perform basic reverse text function.
5. Depoloy Serverless - deploy the app as a serverless web application

### 1. Base project
Starting at the latest example projects of [NextJS](    ).

Download the example and install and run it
```sh
curl https://codeload.github.com/mui-org/material-ui/tar.gz/master | tar -xz --strip=2  material-ui-master/examples/nextjs
mv nextjs reverse-with-nextjs-material
cd reverse-with-nextjs-material
npm install
npm run dev
```
Test on [http://localhost:3000](http://localhost:3000)

### 2. Material Update
[Material UI](https://material-ui.com/) comes with a number of basic templates to help construct a recognisable web app. The update will add in example free React [templates](https://material-ui.com/getting-started/templates/).

Add the Material Icons package to the project
```sh
npm install @material-ui/icons --save
```
Replace the contents of [index.js](.pages/index.js) with contents of Pricing Page Example [pricing.js](https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/pricing/Pricing.js)

```sh
npm run dev
```
If you follow this build so far, then the your `index.js` will look like [step2-index.js](.pages/step2-index.js)

### 3. Web App
Re-factor the app into components and a recognisable web app shell that can be built out from.

Add a `components` directory to build up the reusable React components that every page will use.

- Link: move the `./src/Link.js` to `components` for organisation and use its features
- Styles: move the useStyles() function out to its own file. Include this in a page module and its page function so that styles can be invoked in the React code.
- Layout: this div wraps every page, so this component bring consistent layout. The CSS Baseline is used to provider a global reset. Then Header and Footer are brought to top and tail each page. Later versions of an app might introduce 'AdminLayout' and different headers and footers for super users.
- Header: add in a consistent AppBar for top menu.
- Copyright: to display the copyright statement with a link so you can always go back to home.
- Footer: add in a consistent footer. This pulls in mock footer data and the copyright statement.
- About: re-factor the one created earlier to use same layout.

Now new pages follow the following rules:
- create a new page such as `./pages/my-page-name.js`
- import React and the relevat Material components needed for the page
```
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
```
- add the layout for the app and the global styles function
```
import Layout from '../components/Layout';
import { useStyles } from '../components/Styles';
```
- name the page function and add in the use of global styles
```
export default function MyNewPage() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          My New Page
        </Typography>
      </Box>
      </Container>
    </Layout>
    
  );
}
``` 

### 4. Reverse Function
Modify the app to perform basic reverse function. 
- add reverse page, form submit and reverse echo function




## References
[Next.js](https://github.com/zeit/next.js) is a framework for server-rendered React apps. 

The [tutorial](https://nextjs.org/learn/basics/create-nextjs-app) takes you through the key aspects including page navigation, data fetching, opportunity for hybrid apps that use static rendering and server-side rendering.


