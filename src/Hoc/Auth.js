import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../Action/User_Action';

export default function (Specific, option, admin = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then((res) => {
        if (!res.payload.isAuth) {
          if (option) {
            //비로그인 주제에 로그인 권한에 접근
            props.history.push('/');
            alert('로그인 유저만 접근 가능합니다.');
          }
        } else {
          if (admin && !res.payload.isAdmin) {
            //로그인 했는데 관리자 아닌데 관리자 권한에 접근한경우 홈으로 돌려보내기
            props.history.push('/');
          } else {
            if (option === false) {
              //로그인 했는데 비로그인 권한에 접근하는경우 홈으로 꼬우면 로그아웃눌러라

              props.history.push('/');
            }
          }
        }
      });
    }, []);
    return <Specific {...props} />;
  }
  return AuthenticationCheck;
}
