
// import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";

const UserPdf = ({ order, setDownload }) => {

  console.log(order);
  const { phone, email } = order || {};

  const handleDownloadPdf = () => {
    const capture = document.querySelector(".actual-receipt");
    html2canvas(capture).then((canvas) => {
    //   const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(capture, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("receipt.pdf");
    });
  };
  setDownload(handleDownloadPdf)
  return (
    <div className="wrapper">
      <div className="receipt-box">
        {/* actual receipt */}
        <div className="actual-receipt">
          {/* organization logo */}
          <div className="receipt-organization-logo">
            {/* <img alt="logo" src={logo} /> */}
          </div>

          {/* organization name */}
          <h5>JS SOLUTIONS</h5>

          {/* street address and unit number */}
          <h6>ABC Street 123</h6>

          {/* city province postal code */}
          <h6>Karachi Sindh 75050</h6>

          {/* email-phone-and-website */}
          <div className="phone-and-website">
            <p>
              <Link href={`mailto:${email}`}>{email}</Link>
            </p>
            <p>01234567890</p>

            <p>
              <Link href="https://www.youtube.com/@jsSolutions" target="_blank">
                https://www.youtube.com/@jsSolutions
              </Link>
            </p>
          </div>

          <div className="colored-row first">
            <span>Payment Method</span>
            <span>Card Number</span>
          </div>

          <div className="data-row">
            <span className="font-weight">CREDIT</span>
            <span>************4444</span>
          </div>

          <div className="colored-row">
            <span>Campaign</span>
            <span>Amount</span>
          </div>

          <div className="data-row">
            <span className="font-weight">Dollar a Day for Sadaqa</span>
            <span>$ 50</span>
          </div>

          <div className="colored-row">
            <span>Transaction Details - Donations</span>
            <span />
          </div>

          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">MID :</span> {phone}
            </span>
            <span>
              <span className="font-weight">Sequence #:</span> SSSSSSSS
            </span>
          </div>

          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Invoice #:</span> AX1234ZVB5671234
            </span>
            <span>
              <span className="font-weight">Created :</span> 2023-02-14 02:21:37
            </span>
          </div>
          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Authentication #:</span> TEST
            </span>
            <span>
              <span className="font-weight">Batch #:</span> 1234
            </span>
          </div>
          <div className="data-row border-bottom">
            <span className="font-weight">Transaction: APPROVED - 00</span>
            <span />
          </div>
          <div className="colored-row">
            <span>Thank You For Your Generous Donation</span>
            <span />
          </div>
        </div>
        {/* end of actual receipt */}
      </div>
    </div>
  );
};


export default UserPdf;
