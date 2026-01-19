import { Mail } from 'lucide-react';

const Contact = ({ id }) => {
    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">Contact Us</h2>
                
                <div className="bg-blue-50 p-4 md:p-8 rounded-lg border-l-4 border-medical-blue shadow-sm">
                    <div className="text-center mb-6 md:mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-medical-blue rounded-full mb-3 md:mb-4">
                            <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Get in Touch</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4 md:mb-6 px-2">
                            Have something to add to this website? Notice any information that needs correction? We welcome your feedback and suggestions to help improve this resource for the tubulinopathy community.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <a 
                            href="mailto:tubulinopathy@gmail.com" 
                            className="inline-flex items-center gap-2 md:gap-3 bg-medical-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            <Mail className="w-4 h-4 md:w-5 md:h-5" />
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
