import Script from 'next/script'
export default function WaitlistForm() {


    return (
        <div className="mt-10">
            <p className="text-slate-600">Join the waitlist of wittywords to get notified as soon as it is launched on the play store.</p>
            <iframe
                src="https://tally.so/embed/3qAGBO?alignLeft=1&hideTitle=1&transparentBackground=1"
                width="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="Join the waitlist"
            >
            </iframe>
        </div>
    )
}