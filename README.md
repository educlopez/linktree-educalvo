# Linktree Clone with Northern Lights

<div align="center">

![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![Vercel Badge](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=fff&style=flat)

</div>

A beautiful and responsive Linktree clone featuring a mesmerizing Northern Lights animation effect. Built with Next.js, TypeScript, and Tailwind CSS, this project provides a modern and elegant way to showcase your social media links and personal content. It uses Vercel's Edge Config Store for seamless data management.

## Table of Contents

- [Linktree Clone with Northern Lights](#linktree-clone-with-northern-lights)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Edge Config Setup](#edge-config-setup)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Northern Lights Animation**: Beautiful animated background effect
- **Responsive Design**: Fully responsive layout that works on all devices
- **TypeScript Support**: Built with TypeScript for better development experience
- **Modern Stack**: Uses Next.js and Tailwind CSS for modern web development
- **Edge Config Store**: Utilizes Vercel's Edge Config for efficient data storage
- **Customizable**: Easy to customize with your own links and styling

## Installation

1. Clone the repository:

```bash
git clone https://github.com/educlopez/linktree-educalvo.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Modify the links and content in the Edge Config Store
2. Customize the styling using Tailwind CSS classes
3. Deploy your site to Vercel

## Edge Config Setup

This project uses Vercel's Edge Config Store to manage the links and personal information. Here's an example of the data structure:

```json
{
  "linktree": {
    "name": "Your Name",
    "avatar": "https://github.com/yourusername.png",
    "links": [
      {
        "title": "Website",
        "href": "https://yourwebsite.com",
        "image": ""
      }
    ],
    "socials": [
      {
        "title": "X",
        "href": "https://x.com/yourusername"
      },
      {
        "title": "Github",
        "href": "https://github.com/yourusername"
      }
    ]
  }
}
```

To set up Edge Config:

1. Create a new Edge Config in your Vercel project settings
2. Add your configuration using the structure above
3. Add the Edge Config connection string to your environment variables

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Edu Calvo
