import { useState, useRef, useEffect } from 'react';
import { Check, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { sanitizeExternalUrl } from '../utils/validation';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzV4JVAr1EMFk1zoe2eF5k81B1vw6ysOlzN18DlA1id2SzcelxmN3Jsd1FtjgakBwZI/exec';
const GITHUB_REPO_URL = sanitizeExternalUrl(import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com');

// Blocked dummy, disposable, and common test domains
const BLOCKED_DOMAINS = [
  'test.com',
  'example.com',
  'abc.com',
  'asdf.com',
  'tempmail.com',
  'mailinator.com',
  '10minutemail.com',
  'guerrillamail.com',
  'throwawaymail.com',
  'fake.com',
  'dummy.com',
  'trashmail.com',
  'xyz.com',
  'qwerty.com',
];

// Blocked known dummy exact email addresses
const BLOCKED_EXACT_EMAILS = [
  'test@test.com',
  'abc@abc.com',
  'asdf@asdf.com',
  'admin@admin.com',
  'user@user.com',
  'fake@fake.com',
  'sample@sample.com',
  'email@email.com',
  'mail@mail.com',
];

export default function RoadmapRequestBox() {
  const [email, setEmail] = useState('');
  const [requestTopic, setRequestTopic] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState('');

  const emailInputRef = useRef(null);

  // Auto-prefill if requested via event or URL query param
  useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail?.topic) {
        setRequestTopic(e.detail.topic);
        if (error) setError('');
      }
    };
    window.addEventListener('useai_prefill_request', handlePrefill);

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const req = params.get('request');
      if (req) {
        setRequestTopic(req);
      }
    }

    return () => {
      window.removeEventListener('useai_prefill_request', handlePrefill);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Topic check
    if (!requestTopic.trim()) {
      setError('Please suggest a roadmap topic or workflow');
      return;
    }

    const trimmedEmail = email.trim();

    // 2. Strict Email Format & Regex Check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address');
      emailInputRef.current?.focus();
      return;
    }

    // 3. Block Fake / Disposable / Common Test Domains & Patterns
    const parts = trimmedEmail.toLowerCase().split('@');
    if (parts.length !== 2) {
      setError('Please enter a valid email address');
      emailInputRef.current?.focus();
      return;
    }

    const [localPart, domainPart] = parts;

    // Block if local-part (before @) is less than 3 characters
    if (localPart.length < 3) {
      setError('Please enter a real, active email address');
      emailInputRef.current?.focus();
      return;
    }

    // Check domain labels
    const domainLabels = domainPart.split('.');
    const sld = domainLabels[0]; // second-level domain name

    // Block if second-level domain is single-character
    if (sld.length < 2) {
      setError('Please enter a real, active email address');
      emailInputRef.current?.focus();
      return;
    }

    // Check if domain matches any blocked test/disposable domains
    const isBlockedDomain = BLOCKED_DOMAINS.some(
      (blocked) => domainPart === blocked || domainPart.endsWith('.' + blocked)
    );

    if (
      isBlockedDomain ||
      BLOCKED_EXACT_EMAILS.includes(trimmedEmail.toLowerCase()) ||
      localPart === sld
    ) {
      setError('Please enter a real, active email address');
      emailInputRef.current?.focus();
      return;
    }

    // Validation passed: clear errors & transition to loading state
    setError('');
    setStatus('loading');

    const payload = {
      email: trimmedEmail,
      request: requestTopic.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setStatus('success');
      setEmail('');
      setRequestTopic('');
      setError('');
    } catch (err) {
      console.error('Error submitting roadmap request:', err);
      setStatus('error');
      setError('Unable to submit your request right now. Please try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setError('');
    setEmail('');
    setRequestTopic('');
  };

  return (
    <section id="request-roadmap" className="mt-16 sm:mt-20 w-full">
      <div className="relative p-6 sm:p-8 md:p-10 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFD300]/25 dark:bg-[#131A33] shadow-[6px_6px_0px_0px_#10162F] dark:shadow-[6px_6px_0px_0px_#000000] transition-colors">
        {/* Subtle Pill Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] border-2 border-[#10162F] bg-[#FFD300] text-xs font-mono font-bold text-[#10162F] mb-3 shadow-[2px_2px_0px_0px_#10162F]">
            <Sparkles className="h-3.5 w-3.5 text-[#3A10E5]" />
            <span>COMMUNITY UPDATES &amp; REQUESTS</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#10162F] dark:text-white mb-2">
            Request a Roadmap &amp; Get Notified
          </h2>

          <p className="text-sm sm:text-base text-[#10162F]/80 dark:text-slate-300 leading-relaxed max-w-xl mx-auto font-sans">
            Suggest an AI workflow or tool stack you want us to cover next, and get notified when new roadmaps drop.
          </p>
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div className="max-w-md mx-auto text-center py-6 px-4 rounded-[4px] border-2 border-[#008A5E] bg-[#008A5E]/10">
            <div className="h-10 w-10 mx-auto rounded-full bg-[#008A5E]/20 text-[#008A5E] flex items-center justify-center mb-3">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#10162F] dark:text-white mb-1.5">
              Request Recorded!
            </h3>
            <p className="text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-4 font-sans">
              Thanks! Your request has been recorded. We&apos;ll notify you when it&apos;s live. You can also follow discussions on{' '}
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A10E5] dark:text-[#FFD300] hover:underline font-bold"
              >
                GitHub
              </a>
              .
            </p>
            <button
              onClick={handleReset}
              className="text-xs font-bold text-[#3A10E5] dark:text-[#FFD300] hover:underline cursor-pointer font-sans"
            >
              Submit another request
            </button>
          </div>
        ) : (
          /* Interactive Form */
          <form onSubmit={handleSubmit} noValidate className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Roadmap Request Input Field */}
              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="roadmap-request-input"
                  className="block text-xs font-display font-bold text-[#10162F] dark:text-white"
                >
                  Roadmap Suggestion
                </label>
                <input
                  id="roadmap-request-input"
                  type="text"
                  value={requestTopic}
                  onChange={(e) => {
                    setRequestTopic(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g., WordPress & AI Site Builder..."
                  disabled={status === 'loading'}
                  className="w-full px-3.5 py-2.5 text-sm rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white placeholder:text-[#10162F]/40 dark:placeholder:text-slate-500 focus:outline-none focus:shadow-[3px_3px_0px_0px_#10162F] font-sans disabled:opacity-50 transition-all"
                />
              </div>

              {/* Email Input Field */}
              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="roadmap-email-input"
                  className="block text-xs font-display font-bold text-[#10162F] dark:text-white"
                >
                  Your Email Address
                </label>
                <input
                  ref={emailInputRef}
                  id="roadmap-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address..."
                  disabled={status === 'loading'}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-[4px] border-2 bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white placeholder:text-[#10162F]/40 dark:placeholder:text-slate-500 focus:outline-none focus:shadow-[3px_3px_0px_0px_#10162F] font-sans disabled:opacity-50 transition-all ${
                    error
                      ? 'border-red-600 focus:border-red-600'
                      : 'border-[#10162F] dark:border-[#3B497E]'
                  }`}
                />
                {error && (
                  <p className="text-xs text-red-600 font-bold flex items-center gap-1 mt-1.5 font-sans">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0 text-red-600" />
                    <span>{error}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Footer row with note & submit button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#10162F]/70 dark:text-slate-400 text-center sm:text-left font-sans">
                Zero spam. Only notified when the requested roadmap goes live. Or submit via{' '}
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3A10E5] dark:text-[#FFD300] hover:underline font-bold"
                >
                  GitHub
                </a>
                .
              </p>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="cc-btn-primary px-6 py-2.5 text-sm w-full sm:w-auto"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request ↗</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
