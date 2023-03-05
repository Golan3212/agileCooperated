import React from 'react';
import '../../css/notfound.css';


export const NotFound = () => {
    return (
        <div>
            <div>
                <section className="space-ptb bg-overlay-black-70 slide-bg-19" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10 text-center">
                                <div className="error-404">
                                    <h1 className="error-text">4<span className="text-primary">0</span>4</h1>
                                    <h1 className="text-primary">Oops!</h1>
                                    <h3 className="text-white mb-3"> Извините, мы не можем найти эту страницу.</h3>
                                    <p className="lead text-white mb-4 mb-md-5">Страница, которую вы ищете, могла быть удалена или временно недоступна.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};
