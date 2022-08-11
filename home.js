function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Page"
      title="Welcome to the bank!"
      text="Feel free to view different pages on this site by using the Navigation Bar shown at the top of the page."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
