import Image from "next/image";
import error404 from "../../assets/images/404.jpg";
import Link from "next/link";

const notfound = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 text-center">
          <Image className="img-fluid shadow-sm rounded my-3" src={error404} alt="Page not found" />
          <p className="lead">Page not found</p>
          <Link href='/' className="btn btn-danger px-4">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default notfound;
