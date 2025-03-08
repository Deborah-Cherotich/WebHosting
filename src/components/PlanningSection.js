import React, { useState } from "react";
import "./PlanningSection.css";

const plansData = {
    standard: [
        {
            title: "Basic Plan",
            price: "Ksh 2,000 /Year Excl. VAT",
            description: "Suitable for small websites & blogs.",
            features: [
                "20GB NVMe SSD Disk",
                "2GB RAM Litespeed Server",
                "Free SSL Certificate",
            ],
        },
        {
            title: "Standard Plan",
            price: "Ksh 4,500 /Year Excl. VAT",
            description: "Perfect for growing businesses.",
            features: [
                "100GB NVMe SSD Disk",
                "8GB RAM Litespeed Server",
                "Free .co.ke/.com/.org domain",
                "Free SSL Certificate",
            ],
        },
        {
            title: "Advanced Plan",
            price: "Ksh 8,000 /Year Excl. VAT",
            description: "Great for high-traffic sites.",
            features: [
                "200GB NVMe SSD Disk",
                "12GB RAM Litespeed Server",
                "Free .co.ke/.com/.org domain",
                "Free SSL Certificate",
            ],
        },
        {
            title: "Premium Plan",
            price: "Ksh 15,000 /Year Excl. VAT",
            description: "Ideal for enterprise-level projects.",
            features: [
                "Unlimited NVMe SSD Disk",
                "32GB RAM Litespeed Server",
                "Free .co.ke/.com/.org domain",
                "Free SSL Certificate",
                "Priority Support",
            ],
        },
    ],
    advanced: [
        {
            title: "Basic Plus",
            price: "Ksh 3,000 /Year Excl. VAT",
            description: "Extra power for personal projects.",
            features: [
                "40GB NVMe SSD Disk",
                "4GB RAM Litespeed Server",
                "Free SSL Certificate",
            ],
        },
        {
            title: "Business Plan",
            price: "Ksh 6,500 /Year Excl. VAT",
            description: "Optimized for business websites.",
            features: [
                "150GB NVMe SSD Disk",
                "10GB RAM Litespeed Server",
                "Free .com/.net/.org domain",
                "Free SSL Certificate",
            ],
        },
        {
            title: "Enterprise Plan",
            price: "Ksh 12,000 /Year Excl. VAT",
            description: "For large-scale online businesses.",
            features: [
                "500GB NVMe SSD Disk",
                "24GB RAM Litespeed Server",
                "Free .com/.net/.org domain",
                "Free SSL Certificate",
            ],
        },
        {
            title: "Ultimate Plan",
            price: "Ksh 20,000 /Year Excl. VAT",
            description: "Top-tier performance for enterprises.",
            features: [
                "Unlimited NVMe SSD Disk",
                "64GB RAM Litespeed Server",
                "Free .com/.net/.org domain",
                "Free SSL Certificate",
                "24/7 Priority Support",
            ],
        },
    ],
};

const PlanningSection = () => {
    const [activeTab, setActiveTab] = useState("standard");

    return (
        <div className="planning-container">
            {/* Tabs Section */}
            <div className="tabs-header">
                <h2>Choose Your Plan</h2>
            </div>
            <div className="tabs">
                <div className="tab-line"></div>
                <button
                    className={`tab-button ${activeTab === "standard" ? "active-tab" : "inactive-tab"}`}
                    onClick={() => setActiveTab("standard")}
                >
                    Standard
                </button>
                <button
                    className={`tab-button ${activeTab === "advanced" ? "active-tab" : "inactive-tab"}`}
                    onClick={() => setActiveTab("advanced")}
                >
                    Advanced
                </button>
            </div>

            {/* Plans Section */}
            <div className="plans-grid">
                {plansData[activeTab].map((plan, index) => (
                    <div key={index} className="plan-card">
                        <h3 className="plan-title">{plan.title}</h3>
                        <p className="plan-price">{plan.price}</p>
                        <p className="plan-description">{plan.description}</p>
                        <div className="plan-features">
                            {plan.features.map((feature, i) => (
                                <p key={i}>{feature}</p>
                            ))}
                        </div>
                        <button className="get-started">Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlanningSection;
