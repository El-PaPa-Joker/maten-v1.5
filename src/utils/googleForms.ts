import { FormData } from '../types/form';

export const submitToGoogleForms = async (formData: FormData) => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdok9oh2WBjCGs2TJKibgs5ErIPgHOrbcdyx3b2JzsL_eGAZw/formResponse';
  
  const formDataEncoded = new URLSearchParams();
  // Map your form fields to Google Form field entries
  formDataEncoded.append('entry.594769662', formData.name);
  formDataEncoded.append('entry.199878370', formData.email);
  formDataEncoded.append('entry.215530322', formData.phone);
  formDataEncoded.append('entry.1046590966', formData.message);

  try {
    const response = await fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataEncoded,
    });
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};