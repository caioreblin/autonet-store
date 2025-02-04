import React, { useState } from "react";
import axios from "axios";

const Home: React.FC = () => {
    const [content, setContent] = useState<string>("");

    const handleLogin = async () => {
        try {
            const response = await axios.get("http://localhost:5001/auth", {
                responseType: "text"
            });
            setContent(response.data);
        } catch (error) {
            setContent("Erro ao carregar os dados");
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Fazer login</button>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </div>
    );
};

export default Home;
