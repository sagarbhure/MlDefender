---
title: 'MLDefender'
date: 2023-02-26
excerpt: 'Hackers hide malware in images by appending text to the file, using steganography to alter pixels, and exploiting file format vulnerabilities to execute malware.'
author: ['Sagar Bhure']
website: 'https://mldefender.web.app'
tags: ['Hackfest', 'BIGIP', 'Hyderabad', 'Python', 'Machine Learning', 'Web interface']
team: ['Sagar Bhure', 'Sourav Kumar Dash', 'Vamsi Suman K.']
sponsor: ['Adam Jude']
mentor: ['Shain Singh']
---
## Project Description

Hackers use various techniques to hide malware in images such as appending a string of text to the end of a file which does not change the visual appearance of the image, using image steganography to alter several pixels to embed malicious code and exploit vulnerabilities in image file formats to execute malware. 

This project contains the following components:

- Image steganography detection ML algorithms 
- Anti-malware software for image-based malware detection 
- Documentation best practices for defending against image-based malware 


## Key Hypothesis

To defend against image-based malware, organizations can use image steganography detection techniques such as analyzing slight color differences between two images, large amount of duplicate colors within an image, and size difference of image as indicators of image steganography. Additionally, organizations can use anti-malware software that is specifically designed to detect image-based malware and educate employees to be vigilant when opening image files from unknown sources.

## How It Works

The detection process begins when an employee reports a suspicious image file in a received phishing email,
or the security team receives an alert about a malicious outbound communication to a known malicious IP address. The
reported file is stored in an isolated location to prevent accidental infection.
If the file is identified as malicious through
signature-based detection(refer figure 1.1), preventive actions are taken, such as isolating the infected machine or
updating security policies to block the malware. If the file is not identified as malicious, it is analyzed structurally and
statistically. Structural analysis on file metadata includes checks for changes in timestamp, unusual file properties, and
anomalies in the Exif header content, using open-source tools and StegSpy.
Statistical analysis is performed done make
an REST API call to prediction server hosting SteganoML, a CNN model(refer Code Snippet 1.1 ) hosted on AWS Lambda,
to detect and classify the malware into 25 different types (e.g., Trojan, Rogue, Dialer, etc..).

## Business Value

We propose an intelligent machine learning model for Endpoint detection and response, which none of the mentioned vendors (Crowdstrike, Opswat) offer.

## Technologies Used

1. Machine Learning
2. Stegnography 
2. Python
3. AWS Lambda
4. REST API
5. HTML
6. CSS
7. JQUERY

## Presentations

#### VIDEO EXAMPLE:

Update the src link with the embedded link of your video.

<iframe width="560" height="315" src="#" title="MLDefender" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Interested? Come join us!

Reach out to the principal researchers if you are interested in supporting this project.

| Role   | Skills                                                               |
| ------ | ------------------------------------------------------------------------- |
| UI  | React, HTML, CSS |
| Backend  | Python |
|Machine Learning Specilist |  

