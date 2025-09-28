import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDroplet,
    faFlask,
    faBug,
    faChartLine,
    faCloudSun,
    faSeedling,
    faMoneyBillTrendUp,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

function ChatSection() {
    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello! I'm your AI farming assistant. I can help you with crop management, pest control, weather analysis, and farming best practices. What would you like to know?",
            time: new Date().toLocaleTimeString(),
        },
    ]);
    const [input, setInput] = useState("")
    const chatEndRef = useRef(null)

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSend = () => {
        if (!input.trim()) return

        const userMessage = {
            sender: "user",
            text: input,
            time: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, userMessage])
        setInput("")

        setTimeout(() => {
            const aiMessage = {
                sender: "ai",
                text: "This is a sample AI response to your question: " + userMessage.text,
                time: new Date().toLocaleTimeString(),
            };
            setMessages((prev) => [...prev, aiMessage])
        }, 1000)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSend()
    }
    return (
        <div className="p-6 bg-green-50 dark:bg-gray-800 min-h-screen text-gray-800 font-sans">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                    <div className='dark:text-white mb-5'>AgriSense AI Assistant</div>

                    <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col h-[700px]">


                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-lg max-w-[70%] ${msg.sender === "ai"
                                        ? "bg-gray-100 text-gray-700 self-start"
                                        : "bg-green-500 text-white self-end ml-auto"
                                        }`}
                                >
                                    <p>{msg.text}</p>
                                    <span className="text-xs  block mt-1 text-right">
                                        {msg.time}
                                    </span>
                                </div>
                            ))}
                            <div ref={chatEndRef} />

                        </div>

                        <div className="border-t p-3">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["When should I water my tomatoes?", "Best fertilizer for wheat crop?", "How to prevent pest attacks?", "Soil preparation tips", "Weather impact on crops"].map((tag, index) => (
                                    <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='flex'>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ask me anything about farming..."
                                    className="w-full border border-gray-300 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <button
                                    onClick={handleSend}
                                    className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="space-y-6">

                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                        <h3 className="text-lg dark:text-white font-semibold mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <ActionCard icon={faSeedling} title="Crop Analysis" desc="AI-powered crop health" color="bg-green-100" />
                            <ActionCard icon={faCloudSun} title="Weather Impact" desc="How weather affects crops" color="bg-blue-100" />
                            <ActionCard icon={faBug} title="Pest Identification" desc="Identify and treat pest problems" color="bg-red-100" />
                            <ActionCard icon={faChartLine} title="Yield Prediction" desc="Estimate your crop yield" color="bg-purple-100" />
                            <ActionCard icon={faMoneyBillTrendUp} title="Market Prices" desc="Current and predicted prices" color="bg-orange-100" />
                            <ActionCard icon={faFlask} title="Soil Health" desc="Soil testing recommendations" color="bg-yellow-100" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 space-y-4">
                        <h3 className="text-lg font-semibold mb-4 dark:text-white">Smart Recommendations</h3>
                        <RecommendationCard
                            icon={faDroplet}
                            title="Optimal Watering Time"
                            desc="Water your tomato field between 6-8 AM for best absorption"
                            urgency="high"
                            action="Schedule Now"
                        />
                        <RecommendationCard
                            icon={faFlask}
                            title="Fertilizer Application"
                            desc="Apply nitrogen fertilizer to wheat crop this week"
                            urgency="medium"
                            action="Add to Tasks"
                        />
                        <RecommendationCard
                            icon={faBug}
                            title="Pest Monitoring"
                            desc="Check cotton plants for bollworm activity"
                            urgency="high"
                            action="Set Reminder"
                        />
                        <RecommendationCard
                            icon={faMoneyBillTrendUp}
                            title="Market Opportunity"
                            desc="Tomato prices expected to rise next week"
                            urgency="medium"
                            action="View Details"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Farming Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <InsightCard
                        title="Soil Moisture Trends"
                        value="85%"
                        description="Your soil moisture levels have been optimal for the past 7 days"
                        trend="+5%"
                        color="text-blue-600"
                    />
                    <InsightCard
                        title="Crop Growth Rate"
                        value="12%"
                        description="Tomato crops are growing 12% faster than seasonal average"
                        trend="+3%"
                        color="text-green-600"
                    />
                    <InsightCard
                        title="Pest Risk Index"
                        value="Low"
                        description="Low pest activity detected across all farm areas"
                        trend="-2 points"
                        color="text-red-600"
                    />
                </div>
            </div>
        </div>
    );
}

const ActionCard = ({ icon, title, desc, color }) => (
    <div className={`p-3 rounded ${color} flex flex-col`}>
        <FontAwesomeIcon icon={icon} className="text-xl mb-1" />
        <span className="font-bold">{title}</span>
        <span className="text-xs text-gray-600">{desc}</span>
    </div>
);

const RecommendationCard = ({ icon, title, desc, urgency, action }) => {
    const urgencyColor = urgency === 'high' ? 'text-red-500' : urgency === 'medium' ? 'text-yellow-500' : 'text-green-500';

    return (
        <div className="flex justify-between items-start bg-gray-50 p-3 rounded">
            <div className="flex gap-3">
                <FontAwesomeIcon icon={icon} className={`text-lg mt-1 ${urgencyColor}`} />
                <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                </div>
            </div>
            <button className="bg-purple-600 text-white text-sm px-3 py-1 rounded hover:bg-purple-700">{action}</button>
        </div>
    );
};

const InsightCard = ({ title, value, description, trend, color }) => (
    <div className="p-4 bg-gray-100 rounded shadow-sm">
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm text-gray-400 mt-1">{trend}</p>
    </div>
)

export default ChatSection
