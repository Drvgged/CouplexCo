const PATHS = {
    home: {
        path: "/",
        template: `<h1>Home</h1>`,
    },
    about: {
        path: "/about",
        template: `
    <section id="aboutus" class="aboutus">
        <h1>Welcome to Couplex Co.</h1>
        <p>At Couplex, we specialize in creating stunning websites that engage, inspire, and deliver results. With our team of experienced developers and designers, we bring your ideas to life and help your business thrive online.</p>
    </section>

    <section id="whychu" class="aboutus">
        <h1>Why Choose Us?</h1>
        <ul>
            <li>Tailored Solutions: We understand that each business is unique. Our solutions are customized to meet your specific needs, ensuring a website that aligns perfectly with your brand and goals.</li>
            <li>Attention to Detail: We pay meticulous attention to every aspect of web development, from pixel-perfect designs to clean and efficient code, resulting in a flawless user experience.</li>
            <li>Timely Delivery: We value your time. Our team is dedicated to delivering projects on schedule, without compromising quality.</li>
            <li>Exceptional Support: We provide ongoing support and maintenance to ensure your website continues to perform optimally. Our friendly team is always ready to assist you.</li>
        </ul>
</section>`,
    },
    contact: {
        path: "/contact",
        template: `<h1>Contact</h1>`,
    },
    services: {
        path: "/services",
        template: `<h1>Services</h1>`,
    },
}