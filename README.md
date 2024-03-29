# MKS (www.mks-limited.ie)
A freelance bootstrap website for a client who focuses on doors, windows, insulation, and other general home services.

## Motivation
I was contacted by MKS Limited to develop a low-cost yet highly effective website that could promote their services and provide a way for potential customers to contact the company for a quote

## Features
The website is simple and clean. It includes interactive elements and smooth animations. It looks great on all screen sizes thanks to taking advantage of Bootstrap's Grid System, a powerful mobile-first flexbox grid to build layouts of all shapes and sizes. It uses a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

Ten seconds after loading the website, a window shoes up on the bottom-right mimicking a WhatsApp message. The message can be closed, or clicked to re-direct the user to a WhatsApp conversation with the company owner.

The website has a secure contact form which sends an email to the company owner. The form offers both client-side validation of inputs, as-well as server-side validation (AWS API Gateway models). The website prevents bots from flooding the form thanks to Google reCAPTCHA. If someone were to bypass the form and post to the API directly, and therefore bypass Google reCAPTCHA, an email would not be sent as Google reCAPTCHA is verified on the server-side again.

The website is encrypted with an SSL/TTL certificate generated by AWS Certificate Manager, giving the user peace of mind when sending data through the site. It does this by making sure that any data transferred between users and sites, or between two systems remain impossible to read. It uses encryption algorithms to scramble data in transit, preventing hackers from reading it as it is sent over the connection.

## Tech Stack
### Front-end
* Bootstrap
* HTML
* CSS
* JavaScript

#### Desktop
![image](https://user-images.githubusercontent.com/46572996/109439952-50559a80-7a28-11eb-8170-49332b2594e7.png)

![image](https://user-images.githubusercontent.com/46572996/109440146-15079b80-7a29-11eb-8024-90eae9947fb4.png)

#### Mobile
![image](https://user-images.githubusercontent.com/46572996/109440077-d7a30e00-7a28-11eb-9b2a-2467f9d81800.png)

![image](https://user-images.githubusercontent.com/46572996/109440106-f0abbf00-7a28-11eb-8abb-418dd5ca5a8d.png)


### Back-end
* The domain, **www.mks-limited.ie**, is registed on **AWS Route 53**.
* **AWS Route53** resolves to a suitable node on **AWS CloudFront**, Amazon's CDNs which are caching the website.
* **AWS CloudFront** updates its content from the site's files hosted on **AWS S3 (Simple Storage Solution)** every 24 hours.
* **AWS Certificate Manager** provisions a SSL/TLS certificate and deploys it to **AWS CloudFront** to provide the website's certificate.

* **Google reCAPTCHA v2** is used to verify the source of a form submission on both the client-side and the server-side.
  * If **Google reCAPTCHA** detects a human on the client-side, it will generate a token which is then forwarded alongside the form data to **AWS API Gateway**.

* **AWS API Gateway** checks that the data is matching the set JSON Schema. If so, it forwards the data to **AWS Lambda**.
* **AWS Lambda** uses the token generated by the user, as well as a secret key to make an API request to **Google's reCAPTCHA** API.
  * If the validation is successful, an email is sent using **AWS SES (Simple Email Service)**.
* The email is sent to **info@mks-limited.ie**, an email running on **AWS WorkMail**.
 
![AWS](https://user-images.githubusercontent.com/46572996/109439085-cfe16a80-7a24-11eb-9cde-279fcf94a29f.png)

## Clean and valid code
![image](https://user-images.githubusercontent.com/46572996/112821542-bad91500-907e-11eb-95e7-28898236427c.png)

https://validator.w3.org

![image](https://user-images.githubusercontent.com/46572996/112822022-4e124a80-907f-11eb-99b2-b1788819fdf1.png)

https://www.freeformatter.com/html-validator.html

![image](https://user-images.githubusercontent.com/46572996/112822229-96316d00-907f-11eb-9aae-276c18d77904.png)

https://html5.validator.nu/

## SEO (Page Optimization)
The website was developed with SEO in mind by incorporating
* **GZIP Compression** to reduce the load size and to decrease load time
* **Modern WebP image formats** to provide low image sizes to decrease load time
    * Fallback to JPG images if browser does not support WebP *(Safari for example)* via `<picture>`, `<source>`, and `<img>` tags
* `alt` tags on every image to provide more accessibility for visually impaired users
* Using `async` and `defer` on scripts where possible. This prevents the user from seeing no page content due to scripts
    * `async` to allow the site to load scripts simultaneously with the site's content
    * `defer` to defer scripts until the site's content is finished loading
* **Meta data** such as title and description to help search engines understand the content on the page
* A focus on **keywords** when writing the site's content in order to target search queries more effectively
* **XML Sitemap** to allow search engines to crawl the site more efficiently
* **AWS Cloudfront CDNs** to reduce latency between the server and the user, thus decreasing load times
* **ETag HTTP Header** to identify the specific version of the resource in regards to caching
* **Cache-Control Header** in order to specify browser caching policies
    * `max-age=31536000, no-cache` to cache content for a year and only download specific content which is new/updated
* `loading="lazy"` on images other than the carousel in order to prevent loading images outside of the field of view until the page content is finished loading

### Google PageSpeed Insights Results

![image](https://user-images.githubusercontent.com/46572996/112718379-70269400-8eea-11eb-9659-257f0dba376e.png)

#### Comparing PageSpeed to Competitors

Munster Joinery             |  DK Windows               | Signature Windows
:-------------------------:|:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/46572996/112718819-5175cc80-8eed-11eb-8d4e-0ad1e77bc93d.png)  |  ![image](https://user-images.githubusercontent.com/46572996/112718841-84b85b80-8eed-11eb-9acf-364033884e1d.png) | ![image](https://user-images.githubusercontent.com/46572996/112718914-e973b600-8eed-11eb-8d2e-7849fc434b82.png)

### GTmetrix Results
![image](https://user-images.githubusercontent.com/46572996/112836496-95ee9d00-9092-11eb-9103-827e9c5db6b3.png)

## Trello: 
https://trello.com/b/WI9wqS30/mks
