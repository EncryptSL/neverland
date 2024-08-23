export default function WidgetVotes({data, title, link}) {
    return (
        <div className="col-sm-4">
            <div className="card border-dark">
              <div className="card-header text-center text-bg-dark"><h4 className="my-0 fw-normal">{title}</h4></div>
                <div className="card-body text-bg-light">
                  <h5 className="text-center">TOP 5</h5>
                  <table className="table table-striped table-hover">
                      <tbody>
                          {
                              data && data?.votes?.slice(0, 5).map(e => {
                                  return (
                                      <tr key={e?.id}>
                                          <th>{e?.id}</th>
                                          <th>{e?.username}</th>
                                          <td>{e?.votes}</td>
                                      </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>
                  <div className="text-center">
                      <a href={link} className="btn btn-sm btn-primary">ZOBRAZIT VŠE</a>
                  </div>
                </div>
            </div>
        </div>
    )
}