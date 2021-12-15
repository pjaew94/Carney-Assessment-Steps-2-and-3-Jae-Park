# Set Up

1\. Ensure that the server for this application is running on port 5000 before starting.
You can find the server with part 1 task completed by me here:
https://github.com/pjaew94/code-test-express

2\. Run ```npm i``` to install dependencies

3\. Run ```npm run dev``` to start the application on local development server on port 3000

4\. Navigate to http://localhost:3000/ to see the application.

# Run Down

## Tech Stack

*NextJS - React Framework<br/>
*ReactJS - Frontend Framework<br/>
*TailwindCSS - Styling<br/>
*Typescript - Programming Language<br/>
*AdobeXD - Mock Up<br/>


## Why The Tech Stack?

1\. Before starting to code, I came up with a rough sketch and design on how the final result should look like using AdobeXD. <br/>

2\. I used ReactJS as it allows more organized code and simple state management. I also paired React with NextJS to fetch the data from server side before the client side gets rendered (unnecessary overkill, but it does prevent the "flash" of no content before the data is available on the client side if fetched with useEffect hook). <br/>

3\. Styling was done with TailwindCSS as it allows easy mobile to desktop responsive development, whereas styling with style sheets would require multiple media queries and className assignments. <br/>

4\. Typescript was used over Javascript to prevent runtime errors. Also the autocomplete while developing is very nice.<br/>


## Steps

1\. Create simple mock up using AdobeXD. <br/>

2\. Created getStaticProps inside of home page to fetch the data from server side.<br/>

3\. Created a "MemberCard" component to return while mapping the members list.<br/>

&emsp;3\.a) "MemberCard" component contains a simple button that expands the member's subscription details.<br/>
    
4\. Made a button, when clicked, sorts the member list by highest subscription price to lowest subscription price.<br/>

&emsp;4\.a) This was possible to do with the member's subscription_id, but I chose to sort by price itself. Reasoning is that maybe in a real world scenerio, new subscription              plans and their prices wouldn't increase/decrease in respect to it's ID.<br/>
    
5\. Created function to calculate the average of all members subscription prices.<br/>

6\. Styled the page/component to make it presentable.<br/>


