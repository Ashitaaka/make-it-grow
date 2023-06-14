import Monochev from "../../../../assets/icons/mono_chevrons_icone.svg"
import './ideaextendeddetails.css';

const IdeaExtendedDetails = () => {
  return (
    <div className='idea-details-container'>

      <div className="benefices">
        <div className="benef-header">
          <div className="benef-title">
            <div className="categorie"></div>
            <h2>
              Bénéfices
            </h2>
            </div>
            <div className="cross">
              <img src={Monochev} alt="chevron" />
            </div>
          </div>
        </div>

          <div className="benef-content-container">
          <div className="title">
          <h3>Par Mister leclouuuuti</h3>
          </div>
          <div className="benef-content">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum libero justo, vitae pulvinar ipsum condimentum blandit. Nam convallis sollicitudin libero in scelerisque.
          Sed maximus eros in lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu nibh at faucibus. Nam volutpat non ipsum vestibulum condimentum. Mauris convallis risus purus, eget feugiat enim ullamcorper et.
          Etiam at ultrices urna, ac pharetra ipsum. Maecenas eget justo purus. Pellentesque pretium ante non dolor venenatis congue. Fusce maximus fringilla consequat.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          </div>
      </div>
    </div>
    ) 
};

export default IdeaExtendedDetails;
