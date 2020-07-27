import os, sys

BASE_DIR = os.path.dirname(os.path.abspath("API"))
sys.path.extend([BASE_DIR])

import pytest
import json
import pymysql
from my_settings import TEST_DB, TEST_CONFIG
from app import create_app


@pytest.fixture
def api():
    app = create_app(TEST_CONFIG)
    app.config['TESTING'] = True
    api = app.test_client()

    return api

def test_new_series(api):
    # new_user 생성
    new_user = {
        "email":"unit_test_user@naver.com",
        "password":"unit1234!",
        "nickname":"테스트"
    }
    resp = api.post(
        "user/sign-up",
        data = json.dumps(new_user),
        content_type = "application/json"
    )
    assert resp.status_code == 200

    # new_user 로그인하여 토큰 생성
    resp = api.post(
        "user/sign-in",
        data = json.dumps({"email":"unit_test_user@naver.com", "password":"unit1234!"}),
        content_type = "application/json"
    )
    resp_json = json.loads(resp.data.decode("utf-8"))
    token = resp_json["token"]

    # new_user를 통해 시리즈 생성
    resp = api.post(
        "/series",
        data = json.dumps({"name":"test_series"}),
        content_type = "application/json",
        headers = {"Authorization":token}
    )
    assert resp.status_code == 200
