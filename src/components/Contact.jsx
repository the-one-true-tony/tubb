/* global google */
'use client'

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { Mail } from 'lucide-react';
import { useContactStyles } from '../styles/contactStyles';

const Contact = ({ id }) => {
    const classes = useContactStyles();
    const addressInputRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        latitude: '',
        longitude: '',
        birthdate: '',
        tubulin_variant: '',
        emailable: true,
        researchable: true,
        contactable: true,
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (field) => (e) => {
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    emailable: form.emailable ? 1 : 0,
                    researchable: form.researchable ? 1 : 0,
                    contactable: form.contactable ? 1 : 0,
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to save your details');
            }

            setSubmitSuccess(true);
            setForm({
                name: '',
                email: '',
                address: '',
                latitude: '',
                longitude: '',
                birthdate: '',
                tubulin_variant: '',
                emailable: true,
                researchable: true,
                contactable: true,
            });
        } catch (err) {
            setSubmitError(err.message || 'Something went wrong');
        } finally {
            setSubmitting(false);
        }
    };

    // Initialize Google Places Autocomplete for the address field
    useEffect(() => {
        function initAutocomplete() {
            if (typeof window === 'undefined') return;
            if (!window.google || !window.google.maps || !window.google.maps.places) return;
            if (!addressInputRef.current) return;

            const autocomplete = new window.google.maps.places.Autocomplete(
                addressInputRef.current,
                {
                    types: ['geocode'],
                }
            );

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (!place) return;

                const formatted = place.formatted_address || form.address;
                const lat = place.geometry?.location?.lat();
                const lng = place.geometry?.location?.lng();

                setForm((prev) => ({
                    ...prev,
                    address: formatted,
                    latitude: lat ?? prev.latitude,
                    longitude: lng ?? prev.longitude,
                }));
            });
        }

        // Try to init immediately if script already loaded
        initAutocomplete();

        // Also attach to window so Script onLoad can trigger it
        // (defensive: avoid overwriting if something else set it)
        if (typeof window !== 'undefined' && !window.__initTubbPlaces) {
            window.__initTubbPlaces = initAutocomplete;
        }
    }, [form.address]);
    
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

                {/* Find Other Families feature - hidden for now */}
                {/* <div className={classes.findFamiliesSection}>
                    <h3 className={classes.findFamiliesTitle}>Find Other Families</h3>
                    <p className={classes.findFamiliesText}>
                        If you would like to be contacted by other families, you can
                        share your details here. Your information will be stored in
                        our private database and only used according to your
                        preferences.
                    </p>
                    <button
                        type="button"
                        className={classes.findFamiliesButton}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Share my details
                    </button>
                </div> */}
            </div>

            {/* Modal for Find Other Families - hidden for now */}
            {/* {isModalOpen && (
                <div className={classes.modalBackdrop}>
                    <div className={classes.modal}>
                        <div className={classes.modalHeader}>
                            <h3 className={classes.modalTitle}>Share your details</h3>
                            <button
                                type="button"
                                className={classes.modalClose}
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setSubmitError('');
                                    setSubmitSuccess(false);
                                }}
                            >
                                ✕
                            </button>
                        </div>
                        <p className={classes.modalDescription}>
                            This form is for connecting families affected by
                            tubulinopathies. Address and coordinates will eventually
                            be filled from Google Maps autocomplete; for now you can
                            type them manually.
                        </p>

                        <form className={classes.form} onSubmit={handleSubmit}>
                            <label className={classes.label}>
                                Name
                                <input
                                    type="text"
                                    className={classes.input}
                                    value={form.name}
                                    onChange={handleChange('name')}
                                    required
                                />
                            </label>

                            <label className={classes.label}>
                                Email
                                <input
                                    type="email"
                                    className={classes.input}
                                    value={form.email}
                                    onChange={handleChange('email')}
                                    required
                                />
                            </label>

                            <label className={classes.label}>
                                Address (will use Google autocomplete)
                                <input
                                    type="text"
                                    className={classes.input}
                                    ref={addressInputRef}
                                    value={form.address}
                                    onChange={handleChange('address')}
                                    required
                                />
                            </label>

                            <label className={classes.label}>
                                Date of Birth
                                <input
                                    type="date"
                                    className={classes.input}
                                    value={form.birthdate}
                                    onChange={handleChange('birthdate')}
                                />
                            </label>

                            <label className={classes.label}>
                                Tubulin Variant
                                <select
                                    className={classes.input}
                                    value={form.tubulin_variant}
                                    onChange={handleChange('tubulin_variant')}
                                >
                                    <option value="">Select variant (optional)</option>
                                    <option value="TUBA1A">TUBA1A</option>
                                    <option value="TUBB2B">TUBB2B</option>
                                    <option value="TUBB3">TUBB3</option>
                                    <option value="TUBB2A">TUBB2A</option>
                                    <option value="TUBB">TUBB</option>
                                    <option value="TUBA8">TUBA8</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>

                            <div className={classes.checkboxGroup}>
                                <label className={classes.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={form.emailable}
                                        onChange={handleChange('emailable')}
                                    />
                                    I agree to be contacted by email
                                </label>
                                <label className={classes.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={form.researchable}
                                        onChange={handleChange('researchable')}
                                    />
                                    I am open to being contacted about research
                                    opportunities
                                </label>
                                <label className={classes.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={form.contactable}
                                        onChange={handleChange('contactable')}
                                    />
                                    I am happy to be contacted by other families
                                </label>
                            </div>

                            {submitError && (
                                <p className={classes.errorText}>{submitError}</p>
                            )}
                            {submitSuccess && (
                                <p className={classes.successText}>
                                    Thank you! Your details have been saved.
                                </p>
                            )}

                            <div className={classes.modalActions}>
                                <button
                                    type="button"
                                    className={classes.secondaryButton}
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setSubmitError('');
                                        setSubmitSuccess(false);
                                    }}
                                    disabled={submitting}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={classes.primaryButton}
                                    disabled={submitting}
                                >
                                    {submitting ? 'Saving…' : 'Save details'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}
            {/* Google Places script for address autocomplete */}
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || ''}&libraries=places`}
                strategy="afterInteractive"
                onLoad={() => {
                    if (typeof window !== 'undefined' && window.__initTubbPlaces) {
                        window.__initTubbPlaces();
                    }
                }}
            />
        </section>
    );
};

export default Contact;

