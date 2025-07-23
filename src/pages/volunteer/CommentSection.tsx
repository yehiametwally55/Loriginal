import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import './CommentSection.css';

interface FormData {
  name: string;
  email: string;
  comment: string;
  saveData: boolean;
  agreeToTerms: boolean;
  captchaAnswer: string;
}

interface CaptchaQuestion {
  question: string;
  answer: number;
}

const CommentSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    comment: '',
    saveData: false,
    agreeToTerms: false,
    captchaAnswer: ''
  });

  const [captcha, setCaptcha] = useState<CaptchaQuestion>({ question: '', answer: 0 });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate random captcha question
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const numbers = [
      'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
    ];
    
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * num1);
    const answer = num1 - num2;
    
    setCaptcha({
      question: `${numbers[num1]} - ${numbers[num2]} = `,
      answer: answer
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.comment.trim()) {
      newErrors.comment = 'Comment is required';
    }

    if (!formData.captchaAnswer.trim()) {
      newErrors.captchaAnswer = 'Please solve the captcha';
    } else if (parseInt(formData.captchaAnswer) !== captcha.answer) {
      newErrors.captchaAnswer = 'Incorrect answer';
    }

    // if (!formData.agreeToTerms) {
    //   newErrors.agreeToTerms = 'You must agree to the terms';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        comment: '',
        saveData: false,
        agreeToTerms: false,
        captchaAnswer: ''
      });
      
      generateCaptcha();
      alert('Comment submitted successfully!');
    } catch (error) {
      alert('Error submitting comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="comment-section">
        <h2>Leave a comment</h2>
        
        <form onSubmit={handleSubmit} className="comment-form">
          {/* Name and Email Row */}
          <div className="form-row">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name *"
                className={`form-input ${errors.name ? 'error' : ''}`}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your E-mail *"
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>

          {/* Save Data Checkbox */}
          <div className="checkbox-container center">
            <input
              type="checkbox"
              id="saveData"
              name="saveData"
              checked={formData.saveData}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <label htmlFor="saveData" className="checkbox-label">
              Save my name, email, and website in this browser for the next time I comment
            </label>
          </div>

          {/* Captcha */}
          <div className="captcha-container">
            <p className="captcha-instruction">Please enter an answer in digits:</p>
            <div className="captcha-question">
              <span className="captcha-text">{captcha.question}</span>
              <input
                type="number"
                name="captchaAnswer"
                value={formData.captchaAnswer}
                onChange={handleInputChange}
                className={`captcha-input ${errors.captchaAnswer ? 'error' : ''}`}
              />
            </div>
            {errors.captchaAnswer && <p className="error-message">{errors.captchaAnswer}</p>}
          </div>

          {/* Comment Textarea */}
          <div>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Your comment *"
              rows={6}
              className={`form-textarea ${errors.comment ? 'error' : ''}`}
            />
            {errors.comment && <p className="error-message">{errors.comment}</p>}
          </div>

          {/* Terms Checkbox */}
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <label htmlFor="agreeToTerms" className="checkbox-label">
              By using this form you agree with the storage and handling of your data by this website
            </label>
          </div>
          {errors.agreeToTerms && <p className="error-message">{errors.agreeToTerms}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="button-icon" />
                <span>Leave a Comment</span>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentSection;