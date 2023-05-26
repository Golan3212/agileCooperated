import { Link } from "react-router-dom";

export default function MenuAccount() {
    return (
        <div>
            <nuv>
                <ul>
                    <li>
                        <Link to="/account">Мой профиль</Link>
                    </li>
                    <li>
                        <Link to="/advice">Мои рекомендации</Link>
                    </li>
                    <li>
                        <Link to="#">Меню на неделю</Link>
                    </li>
                </ul>
            </nuv>
        </div>
    )
}
