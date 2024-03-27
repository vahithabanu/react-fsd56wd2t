const Feature =(props) =>{
  return(
    <p className="card-text">
      {props.symbol} {props.feature}
    </p>
  )
}
const Card =(props) =>{
return (
    <div className="card mx-3" style={{width: '18rem'}}>
    
    <div className="card-header">
      <p className="text-center">{props.card.type}</p>
      <h2 className="card-title text-center">{props.card.cost}</h2>
      
    </div>
    
    <div className="card-body">
    
   {
   props.features.map((feature,index)=>{
    let symbol=props.card.features.includes(feature)? '✔' :'✘';
    return <Feature feature={feature} key={index} symbol={symbol}/>
   })
   }
    <div className="d-flex justify-content-center">
    <button className="btn btn-primary">Button</button>
    </div>
    
  </div>
  </div>
  )
}

const App = () => {

  const data={
    features: [
      'Single User',
      '5GB Storage',
      'unlimited public projects',
      'community access',
      'unlimited private projects',
      'dedicated phone support',
      'free subdomain',
      'monthly status reports' ,
      '5 users',
      'unlimited users'
    ],
    cards: [
      {
        type:'FREE',
        cost: '$ 0/month',
        features: [
          'Single User',
      '5GB Storage',
      'unlimited public projects',
      'community access',
        ]
      },
      {
        type: 'PLUS',
        cost: '$ 9/month',
        features: [
          '5 users',
          '5GB Storage',
      'unlimited public projects',
      'community access',
      'unlimited private projects',
      'dedicated phone support',
      'free subdomain',
        ]
      },
      {
        type: 'PRO',
        cost: '$ 49/month',
        features: [
          'unlimited users',
          '5GB Storage',
      'unlimited public projects',
      'community access',
      'unlimited private projects',
      'dedicated phone support',
      'free subdomain',
      'monthly status reports' ,
        ]
      },
    ]
  };
  return (
    <div className="d-flex justify-content-center my-4">
      {
        data.cards.map((card, index)=>{
          return <Card key={index} card={card} features={data.features}/>
        })
      }
        
    </div>
   
  )
}

export default App