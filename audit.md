# Table of contents

1. [HTTP & HTTPS](#http)
2. [Lang attribute](#lang-attributes)
3. [Images](#images)
4. [Responsive Design](#responsive-web-design)
5. [Focus management](#focus-management)

## HTTP & HTTPS

**HyperText Transfer Protocol** (HTTP), is a protocol that allows communication between browsers and servers. It is the foundation of how data is transferred on the web. However, HTTP alone is unencrypted, which poses as a security risk for users since personal information is at a risk of being stolen. In order to prevent this, websites should always use **HyperText Transfer Protocol Secure** (HTTPS), so that connections between the browser and server are automatically encrypted, and would subsequently allow users to safely exchange sensitive data with a server.

## Lang attributes

The `lang` attribute is used to determine the main language of a website. It can help search engines understand the language and serve it to users in search results, and it allows screen readers to properly pronounce text.

![image](https://res.cloudinary.com/bluepnwage/image/upload/v1674319072/sxm-com/pagespeed.web.dev_report_url_http2F2F_form_factor_desktop_exgux7.png)

## Images

Images on a website should try to be served using next-gen formats such as [WebP](https://developers.google.com/speed/webp) since it on average can be 25-35% smaller than JPEG images, 26% smaller than PNG images and still provide great quality.

![image](https://res.cloudinary.com/bluepnwage/image/upload/v1674320257/sxm-com/images-screenshot_zipxi3.png)

In addition to trying to serve smaller sized images, they should also be **lazy loaded**. Lazy loading is a technique where you download resources only as their needed. This can significantly improve the performance of a website since the browser no longer needs to download every image at once. You would typically lazy load images that aren't immediately on the viewport, since users won't be able to see them once the page first loads.

## Responsive web design

Responsive design is a technique used to created layouts that can _respond_ to any screen width and display content properly. Without it, users might have a hard time navigating through a website since they would have to manually zoom in to the bits of the website they might find interesting. One way to ensure a website can be responsive on mobile devices, is by including a [viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) meta tag, which tells browsers to make the width of the content on a page, the same width as the users' device.

## Focus management

Although it's common for most users on a desktop to navigate a website with a mouse, there are certain cases where someone might only have a keyboard. In a situation like this, users will use <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> to move forward on backwards on a website from one focusable element to the next. By default, when an element is focused it will be outlined in black. This is to help users visually identify where they are currently on the website.

Here is an example of the on search bar when it's not focused:

![image](https://res.cloudinary.com/bluepnwage/image/upload/v1674326191/sxm-com/non-focused-input_ldwr1z.png)

And here the browser is natively indicating that the search bar is being focused:
![image](https://res.cloudinary.com/bluepnwage/image/upload/v1674326190/sxm-com/focused-input_yhkloi.png)

For the icons below, the browser is not able to indicate that one of the icons are being focused. When this happens, it is up to the developer to manually apply styles to elements that are focusable.