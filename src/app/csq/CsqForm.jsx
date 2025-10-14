// components/MicrosoftForm.js
export default function CsqForm() {
  return (
    <div className=" relative h-[900px] max-w-[600px] w-full mx-auto ">
      <iframe
        className="w-full h-full"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=PSL8LJS0pU-cWWZntjB_EjhKsfUFImRNlNoU4bbjiWVUMUI1MFlPWTJTVVBDSUJFUjFFU0RLODVGSy4u&embed=true"
        frameBorder="0"
        marginWidth="0"
        marginHeight="0"
        style={{ border: 'none', maxWidth: '100%' }}
        allowFullScreen
        webkitallowfullscreen
        mozallowfullscreen
        msallowfullscreen
      />
    </div>
  );
}
