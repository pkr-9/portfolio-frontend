import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import '../../../styles/global.scss';
import './Certification.scss';

const certifications = [
  {
    year: '2024',
    title:
      'Oracle Cloud Infrastructure(OCI) 2024 Certified Foundations Associate',
    provider: 'Oracle',
    pdf: '../../../assets/pdfs/oci-2024.pdf',
  },
  {
    year: '2024',
    title: 'MongoDB Developers Toolkit',
    provider: 'GeeksforGeeks',
    pdf: '../../../assets/pdfs/mongodb-toolkit.pdf',
  },
  {
    year: '2024',
    title: 'Cloud Computing',
    provider: 'NPTEL',
    pdf: '../../../assets/pdfs/cloud-computing.pdf',
  },
];

const extraCertifications = [
  {
    year: '2024',
    title: 'NLP - Natural Language Processing with Python',
    provider: 'Udemy',
    pdf: '../../../assets/pdfs/nlp-python.pdf',
  },
  {
    year: '2023',
    title: 'Python 101 for Data Science',
    provider: 'Cognitive Class',
    pdf: '../../../assets/pdfs/python101.pdf',
  },
];

const Certification = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleShowPdf = (pdfPath) => {
    setSelectedPdf(pdfPath);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPdf(null);
  };

  const displayedCerts = showAll
    ? [...certifications, ...extraCertifications]
    : certifications;

  return (
    <section id="certification" className="certification-section">
      <Container>
        <h2 className="certification-section-title">Certifications</h2>
        <Row>
          <Col>
            <ul className="certification-timeline">
              {displayedCerts.map((item, i) => (
                <li key={i}>
                  <span className="certification-timeline-date">
                    {item.year}
                  </span>
                  <div className="certification-timeline-content">
                    <div className="certification-card-content">
                      <div className="certification-text">
                        <h4>{item.title}</h4>
                        <p>{item.provider}</p>
                      </div>
                      {item.pdf && (
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="view-certificate-btn"
                          onClick={() => handleShowPdf(item.pdf)}
                        >
                          View Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <div className="text-end mt-4">
          <Button
            variant="outline-primary"
            className="view-toggle-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View Less' : 'View More'}
          </Button>
        </div>

        {/* Modal for PDF */}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
          dialogClassName="modal-custom-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Certificate Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedPdf ? (
              <iframe
                src={`${selectedPdf}#toolbar=0&navpanes=0`}
                title="Certificate PDF"
                allowFullScreen
              />
            ) : (
              <p>PDF could not be loaded.</p>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Certification;
