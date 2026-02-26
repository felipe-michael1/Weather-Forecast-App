import Sidebar from "./Sidebar";

export default function Profile() {
  return (
    <div className="d-flex vh-100 overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-fill overflow-auto">
        {/* NAVBAR */}
        <nav className="navbar navbar-light bg-white shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">
            👤 Account Profile
          </span>
        </nav>

        {/* CONTENT */}
        <div className="p-4">

          <div className="card shadow-sm">
            <div className="card-body">

              {/* TABS */}
              <ul className="nav nav-tabs mb-4" id="profileTabs">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#info"
                  >
                    Profile Info
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#edit"
                  >
                    Edit Profile
                  </button>
                </li>
              </ul>

              <div className="tab-content">

                {/* ================= TAB 1 INFO ================= */}
                <div className="tab-pane fade show active" id="info">

                  <div className="row">

                    {/* FOTO */}
                    <div className="col-md-4 text-center border-end">
                      <img
                        src="https://i.pravatar.cc/150?img=3"
                        alt="profile"
                        className="rounded-circle mb-3"
                        width="150"
                        height="150"
                      />

                      <h5 className="mb-0">Felipe Fonseca</h5>
                      <small className="text-muted">@felipe.dev</small>
                    </div>

                    {/* DADOS */}
                    <div className="col-md-8">

                      <div className="row g-3">

                        <div className="col-md-6">
                          <label className="form-label fw-bold">First Name</label>
                          <p className="form-control-plaintext">Felipe</p>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-bold">Last Name</label>
                          <p className="form-control-plaintext">Fonseca</p>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-bold">Username</label>
                          <p className="form-control-plaintext">felipe.dev</p>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-bold">Email</label>
                          <p className="form-control-plaintext">
                            felipe@email.com
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                {/* ================= TAB 2 EDIT ================= */}
                <div className="tab-pane fade" id="edit">

                  <form>

                    <div className="row g-3">

                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                        />
                      </div>

                    </div>

                    <div className="mt-4 text-end">
                      <button className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>

                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
