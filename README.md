# A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://greensummer-web-2.vercel.app/](https://greensummer-web-2.vercel.app//)


## How to start up developer environment after cloning repo

1. Git clone repo
2. cd to cloned repo
3. Install Node.js: Visit the official Node.js website (**[https://nodejs.org](https://nodejs.org/)**) and download the appropriate installer for your operating system. Run the installer and follow the instructions to install Node.js.
4. Verify Node.js installation: Open a command prompt or terminal and run the following command to verify that Node.js and npm are installed correctly:
    
    ```bash
    node -v
    npm -v
    ```
    
5. Make sure you have installed the necessary dependencies: In the root directory of your project, run the following command to install the required dependencies:
    
    ```bash
    Copy code
    npm install
    ```
    
    This command will read the **`package.json`** file and install the dependencies listed under the "dependencies" and "devDependencies" sections.
    
6. After following these steps, try running the "dev" script again with the **`npm run dev`** command. It should now recognize the "next" command and start the development server for your Next.js project.
7. Now you can start the developer environment by going to http://localhost:3000/
# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
