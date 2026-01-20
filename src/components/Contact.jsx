import { Mail } from 'lucide-react';
import { useContactStyles } from '../styles/contactStyles';

const Contact = ({ id }) => {
    const classes = useContactStyles();
    
    return (
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Contact Us</h2>
                
                <div className={classes.card}>
                    <div className={classes.header}>
                        <div className={classes.iconContainer}>
                            <Mail className={classes.icon} />
                        </div>
                        <h3 className={classes.cardTitle}>Get in Touch</h3>
                        <p className={classes.cardText}>
                            Have something to add to this website? Notice any information that needs correction? We welcome your feedback and suggestions to help improve this resource for the tubulinopathy community.
                        </p>
                    </div>

                    <div className={classes.buttonContainer}>
                        <a 
                            href="mailto:tubulinopathy@gmail.com" 
                            className={classes.button}
                        >
                            <Mail className={classes.buttonIcon} />
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
