import Monochev from '../../../../assets/icons/mono_chevrons_icone.svg';
import './ideaextendeddetails.css';

const IdeaExtendedDetails = ({ idea, users }) => {
  const owner = users.find((user) => user.is_owner);
  return (
    <div className="idea-details-container">
      {/* //------------------------------------ page detail */}

      <div className="details">
        <div className="header">
          <div className="title">
            <div
              style={{ backgroundColor: `var(${idea.color})` }}
              className="categorie"></div>
            <h2>Détails de l'idée</h2>
          </div>
          <div className="cross">
            <img src={Monochev} alt="chevron" />
          </div>
        </div>

        <div className="content-container">
          <div className="title">
            <h3>{idea.title}</h3>
          </div>

          <div className="p-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rutrum libero justo, vitae pulvinar ipsum condimentum blandit. Nam
              convallis sollicitudin libero in scelerisque. Sed maximus eros in
              lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu
              nibh at faucibus. Nam volutpat non ipsum vestibulum condimentum.
              Mauris convallis risus purus, eget feugiat enim ullamcorper et.
              Etiam at ultrices urna, ac pharetra ipsum. Maecenas eget justo
              purus. Pellentesque pretium ante non dolor venenatis congue. Fusce
              maximus fringilla consequat. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
      <hr className="separator" />

      {/* //------------------------------------ impact detail */}

      <div className="impact">
        <div className="header">
          <div className="title">
            <div
              style={{ backgroundColor: `var(${idea.color})` }}
              className="categorie"></div>
            <h2>Impact sur l'organisation</h2>
          </div>
          <div className="cross">
            <img src={Monochev} alt="chevron" />
          </div>
        </div>

        <div className="content-container">
          <div className="title">
            <h3>{idea.title}</h3>
          </div>

          <div className="p-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rutrum libero justo, vitae pulvinar ipsum condimentum blandit. Nam
              convallis sollicitudin libero in scelerisque. Sed maximus eros in
              lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu
              nibh at faucibus. Nam volutpat non ipsum vestibulum condimentum.
              Mauris convallis risus purus, eget feugiat enim ullamcorper et.
              Etiam at ultrices urna, ac pharetra ipsum. Maecenas eget justo
              purus. Pellentesque pretium ante non dolor venenatis congue. Fusce
              maximus fringilla consequat. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
      <hr className="separator" />

      {/* //------------------------------------ bénéfices detail */}
      <div className="benefits">
        <div className="header">
          <div className="title">
            <div
              style={{ backgroundColor: `var(${idea.color})` }}
              className="categorie"></div>
            <h2>Bénéfices</h2>
          </div>
          <div className="cross">
            <img src={Monochev} alt="chevron" />
          </div>
        </div>

        <div className="content-container">
          <div className="title">
            <h3>
              Par {owner.firstname} {owner.lastname}
            </h3>
          </div>

          <div className="p-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rutrum libero justo, vitae pulvinar ipsum condimentum blandit. Nam
              convallis sollicitudin libero in scelerisque. Sed maximus eros in
              lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu
              nibh at faucibus. Nam volutpat non ipsum vestibulum condimentum.
              Mauris convallis risus purus, eget feugiat enim ullamcorper et.
              Etiam at ultrices urna, ac pharetra ipsum. Maecenas eget justo
              purus. Pellentesque pretium ante non dolor venenatis congue. Fusce
              maximus fringilla consequat. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
      <hr className="separator" />

      {/* //------------------------------------ Risque detail */}

      <div className="risks">
        <div className="header">
          <div className="title">
            <div
              style={{ backgroundColor: `var(${idea.color})` }}
              className="categorie"></div>
            <h2>Impact sur l'organisation</h2>
          </div>
          <div className="cross">
            <img src={Monochev} alt="chevron" />
          </div>
        </div>

        <div className="content-container">
          <div className="title">
            <h3>{idea.title}</h3>
          </div>

          <div className="p-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rutrum libero justo, vitae pulvinar ipsum condimentum blandit. Nam
              convallis sollicitudin libero in scelerisque. Sed maximus eros in
              lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu
              nibh at faucibus. Nam volutpat non ipsum vestibulum condimentum.
              Mauris convallis risus purus, eget feugiat enim ullamcorper et.
              Etiam at ultrices urna, ac pharetra ipsum. Maecenas eget justo
              purus. Pellentesque pretium ante non dolor venenatis congue. Fusce
              maximus fringilla consequat. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
      <hr className="separator" />

      {/* //------------------------------------ Commentaire detail */}

      <div className="comments">
        <div className="header">
          <div className="title">
            <div
              style={{ backgroundColor: `var(${idea.color})` }}
              className="categorie"></div>
            <h2>Commentaires</h2>
          </div>
          <div className="cross">
            <img src={Monochev} alt="chevron" />
          </div>
        </div>

        <div className="content-container">
          <div className="title">
            <h3>{idea.title}</h3>
          </div>

          <div className="p-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rutrum libero justo, vitae pulvinar ipsum condimentum blandit. Nam
              convallis sollicitudin libero in scelerisque. Sed maximus eros in
              lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu
              nibh at faucibus. Nam volutpat non ipsum vestibulum condimentum.
              Mauris convallis risus purus, eget feugiat enim ullamcorper et.
              Etiam at ultrices urna, ac pharetra ipsum. Maecenas eget justo
              purus. Pellentesque pretium ante non dolor venenatis congue. Fusce
              maximus fringilla consequat. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
      <div className="cta-button-container">
        <button className="cta-button">Voter</button>
        <button className="cta-button">Donner mon avis</button>
      </div>
    </div>
  );
};

export default IdeaExtendedDetails;
