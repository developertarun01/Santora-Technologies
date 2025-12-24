const blogData = [
    {
        id: 1,
        image: "./assets/images/office.jpg",
        title: "How Digital Transformation Is Reshaping B2B Manufacturing Sales",
        writer: "Emily Carter",
        date: "2025-12-26",
        summary: "Digital tools are redefining how manufacturers attract, engage, and convert B2B buyers in today’s market...",
        desc: "<p>This article explores how digital transformation is changing B2B manufacturing sales.</p><ul><li><b>Online Buyer Behavior Has Evolved: </b>Decision-makers now expect instant access to product data, case studies, and pricing insights before engaging with vendors.</li><li><b>Automation Improves Lead Quality: </b>CRM systems, AI-driven analytics, and marketing automation tools help manufacturers focus on high-intent prospects.</li><li><b>Integrated Sales and Marketing: </b>Alignment between sales teams and digital marketing ensures consistent messaging across the buyer journey.</li></ul><p>Manufacturers that fail to adopt digital systems risk losing relevance in an increasingly competitive environment.</p><p>Companies investing in digital platforms report faster deal cycles, improved customer trust, and higher conversion rates.</p><p>By embracing transformation, manufacturers can build scalable, predictable sales pipelines.</p><p>This guide highlights actionable steps to modernize your B2B sales approach.</p>"
    },
    {
        id: 2,
        image: "./assets/images/office1.jpg",
        title: "Proven Content Marketing Tactics for Industrial B2B Brands",
        writer: "Michael Ross",
        date: "2025-12-28",
        summary: "Content marketing has become a powerful tool for industrial brands to educate buyers and build authority...",
        desc: "<p>Content marketing plays a critical role in B2B industrial growth.</p><ul><li><b>Educational Content Builds Trust: </b>Whitepapers, blogs, and technical guides position manufacturers as industry experts.</li><li><b>SEO Drives Long-Term Visibility: </b>Optimized content ensures your brand appears when buyers search for solutions.</li><li><b>Consistent Messaging Matters: </b>Unified content across channels strengthens brand recall and credibility.</li></ul><p>Industrial buyers often conduct extensive research before making purchasing decisions.</p><p>Brands that consistently publish valuable content gain higher engagement and inbound leads.</p><p>This article explains how to plan and execute a content strategy that delivers measurable ROI.</p><p>Learn how content can become your most reliable lead-generation asset.</p>"
    },
    {
        id: 3,
        image: "./assets/images/office2.jpg",
        title: "Using Data Analytics to Improve Manufacturing Lead Generation",
        writer: "Sophia Bennett",
        date: "2025-12-30",
        summary: "Data-driven marketing enables manufacturers to track performance, refine campaigns, and increase ROI...",
        desc: "<p>Analytics has become essential for effective B2B manufacturing marketing.</p><ul><li><b>Performance Tracking Reveals Insights: </b>Data helps identify which channels deliver the highest-quality leads.</li><li><b>Smarter Budget Allocation: </b>Analytics-driven decisions reduce wasted spend and improve campaign efficiency.</li><li><b>Continuous Optimization: </b>Ongoing analysis allows teams to refine strategies in real time.</li></ul><p>Manufacturers relying on guesswork often struggle to scale their marketing efforts.</p><p>Organizations using analytics report better forecasting and improved sales alignment.</p><p>This guide explains how to leverage data tools to build predictable lead pipelines.</p><p>Discover how analytics can turn marketing data into business growth.</p>"
    },
    {
        id: 4,
        image: "./assets/images/office3.jpg",
        title: "Scaling Manufacturing Businesses with Integrated B2B Marketing",
        writer: "Daniel Harper",
        date: "2026-01-02",
        summary: "Integrated B2B marketing helps manufacturers scale operations while maintaining strong client relationships...",
        desc: "<p>Growth in manufacturing depends on coordinated marketing strategies.</p><ul><li><b>Unified Channels Increase Reach: </b>Combining SEO, paid ads, and email marketing amplifies visibility.</li><li><b>Customer-Centric Messaging: </b>Personalized communication strengthens long-term partnerships.</li><li><b>Scalable Systems Enable Expansion: </b>Integrated tools support growth without sacrificing efficiency.</li></ul><p>Manufacturers that align digital efforts with sales objectives outperform competitors.</p><p>This article outlines how integrated marketing drives sustainable expansion.</p><p>Learn how to build systems that grow with your business.</p><p>Turn your manufacturing brand into a scalable B2B leader.</p>"
    }
];


// Hamburger 
const hambergerOpen = document.querySelector('.hamburger-open');
const hambergerClose = document.querySelector('.hamburger-close');
const navbar = document.querySelector('.nav-inner');
hambergerOpen.addEventListener('click', () => {
    navbar.style.height = "100%";
    hambergerOpen.style.display = "none";
    hambergerClose.style.display = "block";
})
hambergerClose.addEventListener('click', () => {
    navbar.style.height = "60px";
    hambergerClose.style.display = "none";
    hambergerOpen.style.display = "block";
})

// Navbar 
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => {
    link.addEventListener('click', (e) => {
        navLink.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    })
})

// Blog Part 
const blogContainer = document.getElementById('blogContainer');
const noBlog = document.querySelector('.no-blog-post');

function displayBlogs() {
    blogContainer.innerHTML = '';

    if (blogData.length === 0) {
        noBlog.style.display = 'block';
        return;
    }

    const sortedBlogs = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedBlogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'sec9-card';
        blogCard.innerHTML = `
                    <div class="sec9-card-top">
                        <img src="${blog.image}" alt="Blog Image">
                    </div>
                    <div class="sec9-card-bottom">
                    
                    <h2 class="mt-20">${blog.title}</h2>
                    <p class="mt-20">${blog.summary}</p>
                    <div class="flex-center sec9-card-read mt-20">
                        <div class="flex">
                            <p><i class="fas fa-user"></i> ${blog.writer}</p>
                            <p><i class="fas fa-calendar"></i> ${blog.date}</p>
                        </div>
                        <button onclick=displayOneBlogs(${blog.id}) class="btn">Read More <i
                                    class="fa-solid fa-arrow-right fa-beat ml-10"></i></button>
                    </div>
                    </div>
        `
        blogContainer.append(blogCard);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    displayBlogs();
})

const sec9Container = document.getElementById('sec9-container');

function displayOneBlogs(id) {
    const blog = blogData.find(item => item.id === id);

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!blog) return;
    sec9Container.innerHTML = `
        <a href="blog.html">
          <button class="btn mt-50">
            <i class="fa-solid fa-arrow-left mr-10"></i>
            See All Blogs
          </button>
        </a>

        <div class="one-blog-container grid-2 mt-20">
        <div>
                        <img src="${blog.image}" alt="Blog Image">
                    </div>
            <div>
            <h2>${blog.title}</h2>
            <div class="flex mt-20">
                <p><i class="fas fa-user"></i> ${blog.writer}</p>
                <p><i class="fas fa-calendar"></i> ${blog.date}</p>
            </div>
            <div class="mt-20 flex-col">${blog.desc}</div>
            </div>
        </div>
    `;
}