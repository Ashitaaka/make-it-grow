import { useState } from 'react';
import Monochev from '../../../../assets/icons/mono_chevrons_icone.svg';
import MonochevBlanc from '../../../../assets/icons/mono_chevrons_icone_blanc.svg'
import './ideaextendeddetails.css';

const IdeaExtendedDetails = ({ idea, users }) => {
  console.log(users);
  const owner = users.find((user) => user.is_owner);

  const [expandedSections, setExpandedSections] = useState({
    details: true,
    impact: false,
    benefits: false,
    risks: false,
    comments: false
  });

  const toggleContent = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="idea-details-container">
      {/* ------------------------------------ page detail */}
      <div className={`details ${expandedSections.details ? 'active' : ''}`}>
        <div className="header">
          <div className="title">
            <div   style={{
                            backgroundColor: expandedSections.details ? `var(${idea.color})` : 'transparent',
                            border: expandedSections.details ? 'none' : `2px solid var(${idea.color})`
                          }} className="categorie"></div>
            <h2>Détails de l'idée</h2>
          </div>
          <div className="cross" onClick={() => toggleContent('details')}>
            {expandedSections.details ? (
              <img src={MonochevBlanc} alt="chevron" style={{
                backgroundColor: `var(${idea.color})`,
                transform: 'rotate(270deg)',
              }} />
            ) : (
              <img src={Monochev} alt="chevron" style={{
                backgroundColor:'var(--ultra-light-color)'

              }} />
            )}
          </div>

        </div>
        {expandedSections.details && (
          <div className="content-container">
            <div className="title">
              <h3>{idea.title}</h3>
            </div>
            <div className="p-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum libero justo, vitae
                pulvinar ipsum condimentum blandit. Nam convallis sollicitudin libero in scelerisque. Sed maximus eros
                in lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu nibh at faucibus. Nam volutpat non
                ipsum vestibulum condimentum. Mauris convallis risus purus, eget feugiat enim ullamcorper et. Etiam at
                ultrices urna, ac pharetra ipsum. Maecenas eget justo purus. Pellentesque pretium ante non dolor
                venenatis congue. Fusce maximus fringilla consequat. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------ impact detail */}
      <div className={`impact ${expandedSections.impact ? 'active' : ''}`}>
        <div className="header">
          <div className="title">
            <div style={{
                          backgroundColor: expandedSections.impact ? `var(${idea.color})` : 'transparent',
                          border: expandedSections.impact ? 'none' : `2px solid var(${idea.color})`
                        }} className="categorie"></div>
            <h2>Impact sur l'organisation</h2>
          </div>
          <div className="cross" onClick={() => toggleContent('impact')}>
              {expandedSections.impact ? (
                  <img src={MonochevBlanc} alt="chevron" style={{
                    backgroundColor: `var(${idea.color})`,
                    transform: 'rotate(270deg)',
                  }} />
                ) : (
                  <img src={Monochev} alt="chevron" style={{
                    backgroundColor:'var(--ultra-light-color)'

                  }} />
                )}
          </div>
        </div>
        {expandedSections.impact && (
          <div className="content-container">
            <div className="title">
              <h3>{idea.title}</h3>
            </div>
            <div className="p-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum libero justo, vitae
                pulvinar ipsum condimentum blandit. Nam convallis sollicitudin libero in scelerisque. Sed maximus eros
                in lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu nibh at faucibus. Nam volutpat non
                ipsum vestibulum condimentum. Mauris convallis risus purus, eget feugiat enim ullamcorper et. Etiam at
                ultrices urna, ac pharetra ipsum. Maecenas eget justo purus. Pellentesque pretium ante non dolor
                venenatis congue. Fusce maximus fringilla consequat. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------ bénéfices detail */}
      <div className={`benefits ${expandedSections.benefits ? 'active' : ''}`}>
        <div className="header">
          <div className="title">
            <div style={{
                          backgroundColor: expandedSections.benefits ? `var(${idea.color})` : 'transparent',
                          border: expandedSections.benefits ? 'none' : `2px solid var(${idea.color})`
                        }} className="categorie"></div>
            <h2>Bénéfices</h2>
          </div>
          <div className="cross" onClick={() => toggleContent('benefits')}>
                {expandedSections.benefits ? (
                    <img src={MonochevBlanc} alt="chevron" style={{
                      backgroundColor: `var(${idea.color})`,
                      transform: 'rotate(270deg)',
                    }} />
                  ) : (
                    <img src={Monochev} alt="chevron" style={{
                      backgroundColor:'var(--ultra-light-color)'

                    }} />
                  )}
          </div>
        </div>
        {expandedSections.benefits && (
          <div className="content-container">
            <div className="title">
              <h3>
                Par {owner.firstname} {owner.lastname}
              </h3>
            </div>
            <div className="p-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum libero justo, vitae
                pulvinar ipsum condimentum blandit. Nam convallis sollicitudin libero in scelerisque. Sed maximus eros
                in lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu nibh at faucibus. Nam volutpat non
                ipsum vestibulum condimentum. Mauris convallis risus purus, eget feugiat enim ullamcorper et. Etiam at
                ultrices urna, ac pharetra ipsum. Maecenas eget justo purus. Pellentesque pretium ante non dolor
                venenatis congue. Fusce maximus fringilla consequat. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------ Risque detail */}
      <div className={`risks ${expandedSections.risks ? 'active' : ''}`}>
        <div className="header">
          <div className="title">
            <div style={{
                          backgroundColor: expandedSections.risks ? `var(${idea.color})` : 'transparent',
                          border: expandedSections.risks ? 'none' : `2px solid var(${idea.color})`
                        }} className="categorie"></div>
            <h2>Risques</h2>
          </div>
          <div className="cross" onClick={() => toggleContent('risks')}>
              {expandedSections.risks ? (
                  <img src={MonochevBlanc} alt="chevron" style={{
                    backgroundColor: `var(${idea.color})`,
                    transform: 'rotate(270deg)',
                  }} />
                ) : (
                  <img src={Monochev} alt="chevron" style={{
                    backgroundColor:'var(--ultra-light-color)'

                  }} />
                )}
          </div>
        </div>
        {expandedSections.risks && (
          <div className="content-container">
            <div className="title">
              <h3>{idea.title}</h3>
            </div>
            <div className="p-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum libero justo, vitae
                pulvinar ipsum condimentum blandit. Nam convallis sollicitudin libero in scelerisque. Sed maximus eros
                in lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu nibh at faucibus. Nam volutpat non
                ipsum vestibulum condimentum. Mauris convallis risus purus, eget feugiat enim ullamcorper et. Etiam at
                ultrices urna, ac pharetra ipsum. Maecenas eget justo purus. Pellentesque pretium ante non dolor
                venenatis congue. Fusce maximus fringilla consequat. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------ Comment detail */}
      <div className={`comments ${expandedSections.comments ? 'active' : ''}`}>
        <div className="header">
          <div className="title">
            <div style={{
                          backgroundColor: expandedSections.comments ? `var(${idea.color})` : 'transparent',
                          border: expandedSections.comments ? 'none' : `2px solid var(${idea.color})`
                        }} className="categorie"></div>
            <h2>Commentaires</h2>
          </div>
          <div className="cross" onClick={() => toggleContent('comments')}>
          {expandedSections.comments ? (
              <img src={MonochevBlanc} alt="chevron" style={{
                backgroundColor: `var(${idea.color})`,
                transform: 'rotate(270deg)',
              }} />
            ) : (
              <img src={Monochev} alt="chevron" style={{
                backgroundColor:'var(--ultra-light-color)'

              }} />
            )}
          </div>
        </div>
        {expandedSections.comments && (
          <div className="content-container">
            <div className="title">
              <h3>{idea.title}</h3>
            </div>
            <div className="p-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum libero justo, vitae
                pulvinar ipsum condimentum blandit. Nam convallis sollicitudin libero in scelerisque. Sed maximus eros
                in lectus sollicitudin, ac hendrerit mi cursus. Nulla consequat eu nibh at faucibus. Nam volutpat non
                ipsum vestibulum condimentum. Mauris convallis risus purus, eget feugiat enim ullamcorper et. Etiam at
                ultrices urna, ac pharetra ipsum. Maecenas eget justo purus. Pellentesque pretium ante non dolor
                venenatis congue. Fusce maximus fringilla consequat. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaExtendedDetails;
